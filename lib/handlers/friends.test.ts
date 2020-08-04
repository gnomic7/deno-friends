import { spy, Spy } from "https://raw.githubusercontent.com/udibo/mock/v0.3.0/spy.ts";
import { assertEquals } from "https://deno.land/std@0.50.0/testing/asserts.ts";

import { stub, Stub } from "https://raw.githubusercontent.com/udibo/mock/v0.3.0/stub.ts";
import MongoDBClient from '../clients/MongoClient.ts';
import {getFriends} from './friends.ts';
import {formatResponse} from '../utils/mod.ts';

Deno.test('Testing Friends API', async () => {
  const spyformatRes: Spy<void> = spy(formatResponse);
  const mClient = new MongoDBClient({host: 'mongodb://localhost', port: 1111});
  const database: Stub<MongoDBClient> = stub(mClient, 'database');
  const collection: Stub<typeof database> = stub(database, 'collection', () => ({
      find: async () => ({test:1})
  }));
  await getFriends({response: {}});
  assertEquals(spyformatRes.calls[0].args, [{}]);
});