import {Router} from 'https://deno.land/x/oak/mod.ts';
import {getFriends, getFriend, storeFriend, updateFriend, removeFriend} from './handlers/mod.ts';
import {v4} from 'https://deno.land/std/uuid/mod.ts';

const router = new Router();

router
  .get('/friends', getFriends)
  .get('/friends/:id', getFriend)
  .post('/friends', storeFriend)
  .put('/friends/:id', updateFriend)
  .delete('/friends/:id', removeFriend)

export default router;