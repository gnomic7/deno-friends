import type {Friend, FriendWithId} from '../../types/handlers/friends.ts';
import {removeMongoId} from './mod.ts';
export const formatResponse = ({ status, payload = []}: {status: number, payload: FriendWithId[]}) => ({success: [200,201].includes(status), payload:removeMongoId(payload)})