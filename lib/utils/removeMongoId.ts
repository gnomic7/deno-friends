import type {FriendWithId} from '../../types/handlers/friends.ts';

const removeMongoId = (payload: FriendWithId[] = []) => {
  if (payload && payload.length) {
    return payload.map(({_id, ...restPayload}) => restPayload);
  }
  return 
}

export default removeMongoId;