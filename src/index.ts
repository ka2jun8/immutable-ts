import assert from "assert"

import { Record } from "immutable" 

type UserProps = {
  a: number
  b: string
}

const defaultUserProps: UserProps = {
  a: 123,
  b: "bbb",
}

const MyRecord = Record(defaultUserProps)

class MyRecord1 extends MyRecord implements UserProps {
  public readonly a!: number;
  public readonly b!: string;

  getA() {
    return this.a
  }
  getB() {
    return this.b
  }
}

const myRecord = new MyRecord1({ a: 100 })

assert.strictEqual(myRecord.getA(), 100)
assert.strictEqual(myRecord.getB(), "bbb")
