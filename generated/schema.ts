// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class facto extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("totalSmartChef", Value.fromBigInt(BigInt.zero()));
    this.set("Factoryaddress", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save facto entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type facto must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("facto", id.toString(), this);
    }
  }

  static load(id: string): facto | null {
    return changetype<facto | null>(store.get("facto", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalSmartChef(): BigInt {
    let value = this.get("totalSmartChef");
    return value!.toBigInt();
  }

  set totalSmartChef(value: BigInt) {
    this.set("totalSmartChef", Value.fromBigInt(value));
  }

  get Factoryaddress(): Bytes {
    let value = this.get("Factoryaddress");
    return value!.toBytes();
  }

  set Factoryaddress(value: Bytes) {
    this.set("Factoryaddress", Value.fromBytes(value));
  }
}

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("Staketoken", Value.fromString(""));
    this.set("rewardtoken", Value.fromString(""));
    this.set("factoryad", Value.fromBytes(Bytes.empty()));
    this.set("reward", Value.fromBigInt(BigInt.zero()));
    this.set("block", Value.fromBigInt(BigInt.zero()));
    this.set("endBlock", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Pool must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Pool", id.toString(), this);
    }
  }

  static load(id: string): Pool | null {
    return changetype<Pool | null>(store.get("Pool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get Staketoken(): string {
    let value = this.get("Staketoken");
    return value!.toString();
  }

  set Staketoken(value: string) {
    this.set("Staketoken", Value.fromString(value));
  }

  get rewardtoken(): string {
    let value = this.get("rewardtoken");
    return value!.toString();
  }

  set rewardtoken(value: string) {
    this.set("rewardtoken", Value.fromString(value));
  }

  get factoryad(): Bytes {
    let value = this.get("factoryad");
    return value!.toBytes();
  }

  set factoryad(value: Bytes) {
    this.set("factoryad", Value.fromBytes(value));
  }

  get reward(): BigInt {
    let value = this.get("reward");
    return value!.toBigInt();
  }

  set reward(value: BigInt) {
    this.set("reward", Value.fromBigInt(value));
  }

  get limit(): BigInt | null {
    let value = this.get("limit");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set limit(value: BigInt | null) {
    if (!value) {
      this.unset("limit");
    } else {
      this.set("limit", Value.fromBigInt(<BigInt>value));
    }
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get endBlock(): BigInt {
    let value = this.get("endBlock");
    return value!.toBigInt();
  }

  set endBlock(value: BigInt) {
    this.set("endBlock", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get users(): Array<string> {
    let value = this.get("users");
    return value!.toStringArray();
  }

  set users(value: Array<string>) {
    this.set("users", Value.fromStringArray(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("pool", Value.fromString(""));
    this.set("stakeAmount", Value.fromBigInt(BigInt.zero()));
    this.set("staketoken", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get stakeAmount(): BigInt {
    let value = this.get("stakeAmount");
    return value!.toBigInt();
  }

  set stakeAmount(value: BigInt) {
    this.set("stakeAmount", Value.fromBigInt(value));
  }

  get staketoken(): string {
    let value = this.get("staketoken");
    return value!.toString();
  }

  set staketoken(value: string) {
    this.set("staketoken", Value.fromString(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("decimals", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value!.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }
}
