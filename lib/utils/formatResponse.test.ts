import { assertEquals } from "https://deno.land/std@0.50.0/testing/asserts.ts";
import { formatResponse } from "./formatResponse.ts";
Deno.test('Format Response should return correct success and payload', () => {
  const oneFriend = {name: 'test', age: 5, isTeen: false, id: 'abcd-efg-hijk-lmnop'};
  assertEquals(formatResponse({status: 200, payload: [{_id: {$oid: '123'}, ...oneFriend}]}), {success: true, payload: [oneFriend]});
  assertEquals(formatResponse({status: 400, payload: [{_id: {$oid: '123'}, ...oneFriend}]}), {success: false, payload: [oneFriend]});
});