// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class TrustUpdated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TrustUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type TrustUpdated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("TrustUpdated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): TrustUpdated | null {
    return changetype<TrustUpdated | null>(
      store.get_in_block("TrustUpdated", id.toHexString()),
    );
  }

  static load(id: Bytes): TrustUpdated | null {
    return changetype<TrustUpdated | null>(
      store.get("TrustUpdated", id.toHexString()),
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get truster(): Bytes {
    let value = this.get("truster");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set truster(value: Bytes) {
    this.set("truster", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get newTrust(): BigInt {
    let value = this.get("newTrust");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set newTrust(value: BigInt) {
    this.set("newTrust", Value.fromBigInt(value));
  }

  get totalTrusteeInFlow(): BigInt {
    let value = this.get("totalTrusteeInFlow");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalTrusteeInFlow(value: BigInt) {
    this.set("totalTrusteeInFlow", Value.fromBigInt(value));
  }

  get totalTrusterOutFlow(): BigInt {
    let value = this.get("totalTrusterOutFlow");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalTrusterOutFlow(value: BigInt) {
    this.set("totalTrusterOutFlow", Value.fromBigInt(value));
  }

  get prevTrustScore(): BigInt {
    let value = this.get("prevTrustScore");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set prevTrustScore(value: BigInt) {
    this.set("prevTrustScore", Value.fromBigInt(value));
  }

  get newTrustScore(): BigInt {
    let value = this.get("newTrustScore");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set newTrustScore(value: BigInt) {
    this.set("newTrustScore", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class TrustLink extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TrustLink entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TrustLink must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("TrustLink", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TrustLink | null {
    return changetype<TrustLink | null>(store.get_in_block("TrustLink", id));
  }

  static load(id: string): TrustLink | null {
    return changetype<TrustLink | null>(store.get("TrustLink", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get truster(): Bytes {
    let value = this.get("truster");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set truster(value: Bytes) {
    this.set("truster", Value.fromBytes(value));
  }

  get trustee(): Bytes {
    let value = this.get("trustee");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set trustee(value: Bytes) {
    this.set("trustee", Value.fromBytes(value));
  }

  get flowRate(): BigInt {
    let value = this.get("flowRate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set flowRate(value: BigInt) {
    this.set("flowRate", Value.fromBigInt(value));
  }
}

export class Member extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Member entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Member must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Member", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Member | null {
    return changetype<Member | null>(
      store.get_in_block("Member", id.toHexString()),
    );
  }

  static load(id: Bytes): Member | null {
    return changetype<Member | null>(store.get("Member", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get inFlowRate(): BigInt {
    let value = this.get("inFlowRate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set inFlowRate(value: BigInt) {
    this.set("inFlowRate", Value.fromBigInt(value));
  }

  get outFlowRate(): BigInt {
    let value = this.get("outFlowRate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set outFlowRate(value: BigInt) {
    this.set("outFlowRate", Value.fromBigInt(value));
  }

  get trustScore(): BigInt {
    let value = this.get("trustScore");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set trustScore(value: BigInt) {
    this.set("trustScore", Value.fromBigInt(value));
  }

  get trusters(): TrustLinkLoader {
    return new TrustLinkLoader(
      "Member",
      this.get("id")!.toBytes().toHexString(),
      "trusters",
    );
  }

  get trustees(): TrustLinkLoader {
    return new TrustLinkLoader(
      "Member",
      this.get("id")!.toBytes().toHexString(),
      "trustees",
    );
  }
}

export class TrustLinkLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): TrustLink[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<TrustLink[]>(value);
  }
}
