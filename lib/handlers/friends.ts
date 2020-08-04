import type {Friend, FriendWithId} from '../../types/handlers/friends.ts';
import {formatResponse, removeMongoId} from '../utils/mod.ts';
import MongoDBClient from '../clients/MongoClient.ts';

const {MONGO_HOST, MONGO_PORT} = Deno.env.toObject();
const mClient = new MongoDBClient({host: MONGO_HOST || 'mongodb://localhost', port: Number(MONGO_PORT) || 27017});
const friendsCollection = mClient.database('crud').collection<Friend>('friends');

export const getFriends = async ({response}: {response:any}) => {
  response.body = formatResponse({status: 200, payload: removeMongoId(await friendsCollection.find({id: {$ne: null}}))})
}

export const getFriend = async ({params: {id}, response}: {params: {id: string}, response:any}) => {
  const resp =
  response.body = formatResponse({status: 200, payload: removeMongoId(await friendsCollection.find({id}))})
}

export const storeFriend = async ({request,response }: {request: any, response:any}) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = {message: 'Invalid payload'};
    return;
  }
  try {
    const {type, value} = request.body();
    if (type === 'json') {
      const insPayload = await value;
      await friendsCollection.insertOne(insPayload)
      response.status = 201;
      response.body = formatResponse({status: 201, payload: insPayload})
      return;
    }
    response.status = 400;
    response.body = { message: 'Payload not JSON'}
  }catch(error) {
    console.log(error)
  }
}

export const updateFriend = async ({params: {id},request, response}: {params: {id: string},request: any, response:any}) => {
  const {type, value} = request.body();
  if (type === 'json') {
    const insPayload = await value;
    await friendsCollection.updateOne({id}, {$set: insPayload})
    response.body = formatResponse({status: 201, payload: removeMongoId(await friendsCollection.find({id}))})
    return;
  }
  response.status = 400;
  response.body = {message: 'Unable to update!'};
}

export const removeFriend = async ({params:{id}, response}: {params: {id: string},response:any}) => {
  const deleteCount = await friendsCollection.deleteOne({id});
  if (deleteCount) {
    response.status = 204
  } else {
    response.status = 400;
    response.body = {message: 'Unable to remove friend'}
  }
}