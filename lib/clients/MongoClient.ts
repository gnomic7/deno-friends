import { MongoClient } from "https://deno.land/x/mongo@v0.9.1/mod.ts";
import type {MongoDBClientOptions} from './../../types/clients/mongodbclient.ts'

export default class MongoDBClient extends MongoClient {
  constructor({host, port}: MongoDBClientOptions) {
    super()
    super.connectWithUri(`${host}:${port}`);
    return this;
  }
}