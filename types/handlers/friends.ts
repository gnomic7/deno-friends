export type Friend = {
  id: string,
  name: string,
  age: number,
  isTeen: boolean
}

export type FriendWithId = Friend & {
  _id: {$oid: string}
}