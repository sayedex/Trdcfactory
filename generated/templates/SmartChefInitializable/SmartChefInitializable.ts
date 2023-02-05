// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EmergencyWithdraw extends ethereum.Event {
  get params(): EmergencyWithdraw__Params {
    return new EmergencyWithdraw__Params(this);
  }
}

export class EmergencyWithdraw__Params {
  _event: EmergencyWithdraw;

  constructor(event: EmergencyWithdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Initialize extends ethereum.Event {
  get params(): Initialize__Params {
    return new Initialize__Params(this);
  }
}

export class Initialize__Params {
  _event: Initialize;

  constructor(event: Initialize) {
    this._event = event;
  }

  get _stakedToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _rewardToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _rewardPerBlock(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _startBlock(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _bonusEndBlock(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _poolLimitPerUser(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _numberBlocksForUserLimit(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get _admin(): Address {
    return this._event.parameters[7].value.toAddress();
  }

  get _pooladdress(): Address {
    return this._event.parameters[8].value.toAddress();
  }
}

export class NewPoolLimit extends ethereum.Event {
  get params(): NewPoolLimit__Params {
    return new NewPoolLimit__Params(this);
  }
}

export class NewPoolLimit__Params {
  _event: NewPoolLimit;

  constructor(event: NewPoolLimit) {
    this._event = event;
  }

  get poolLimitPerUser(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class NewRewardPerBlock extends ethereum.Event {
  get params(): NewRewardPerBlock__Params {
    return new NewRewardPerBlock__Params(this);
  }
}

export class NewRewardPerBlock__Params {
  _event: NewRewardPerBlock;

  constructor(event: NewRewardPerBlock) {
    this._event = event;
  }

  get rewardPerBlock(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class NewStartAndEndBlocks extends ethereum.Event {
  get params(): NewStartAndEndBlocks__Params {
    return new NewStartAndEndBlocks__Params(this);
  }
}

export class NewStartAndEndBlocks__Params {
  _event: NewStartAndEndBlocks;

  constructor(event: NewStartAndEndBlocks) {
    this._event = event;
  }

  get startBlock(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get endBlock(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RewardsStop extends ethereum.Event {
  get params(): RewardsStop__Params {
    return new RewardsStop__Params(this);
  }
}

export class RewardsStop__Params {
  _event: RewardsStop;

  constructor(event: RewardsStop) {
    this._event = event;
  }

  get blockNumber(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TokenRecovery extends ethereum.Event {
  get params(): TokenRecovery__Params {
    return new TokenRecovery__Params(this);
  }
}

export class TokenRecovery__Params {
  _event: TokenRecovery;

  constructor(event: TokenRecovery) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SmartChefInitializable__userInfoResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class SmartChefInitializable extends ethereum.SmartContract {
  static bind(address: Address): SmartChefInitializable {
    return new SmartChefInitializable("SmartChefInitializable", address);
  }

  PRECISION_FACTOR(): BigInt {
    let result = super.call(
      "PRECISION_FACTOR",
      "PRECISION_FACTOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PRECISION_FACTOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PRECISION_FACTOR",
      "PRECISION_FACTOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  SMART_CHEF_FACTORY(): Address {
    let result = super.call(
      "SMART_CHEF_FACTORY",
      "SMART_CHEF_FACTORY():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_SMART_CHEF_FACTORY(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "SMART_CHEF_FACTORY",
      "SMART_CHEF_FACTORY():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  accTokenPerShare(): BigInt {
    let result = super.call(
      "accTokenPerShare",
      "accTokenPerShare():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_accTokenPerShare(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "accTokenPerShare",
      "accTokenPerShare():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bonusEndBlock(): BigInt {
    let result = super.call("bonusEndBlock", "bonusEndBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_bonusEndBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "bonusEndBlock",
      "bonusEndBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasUserLimit(): boolean {
    let result = super.call("hasUserLimit", "hasUserLimit():(bool)", []);

    return result[0].toBoolean();
  }

  try_hasUserLimit(): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasUserLimit", "hasUserLimit():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isInitialized(): boolean {
    let result = super.call("isInitialized", "isInitialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_isInitialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isInitialized", "isInitialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lastRewardBlock(): BigInt {
    let result = super.call(
      "lastRewardBlock",
      "lastRewardBlock():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_lastRewardBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastRewardBlock",
      "lastRewardBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  numberBlocksForUserLimit(): BigInt {
    let result = super.call(
      "numberBlocksForUserLimit",
      "numberBlocksForUserLimit():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_numberBlocksForUserLimit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numberBlocksForUserLimit",
      "numberBlocksForUserLimit():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingReward(_user: Address): BigInt {
    let result = super.call(
      "pendingReward",
      "pendingReward(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_pendingReward(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingReward",
      "pendingReward(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  poolLimitPerUser(): BigInt {
    let result = super.call(
      "poolLimitPerUser",
      "poolLimitPerUser():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_poolLimitPerUser(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "poolLimitPerUser",
      "poolLimitPerUser():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerBlock(): BigInt {
    let result = super.call("rewardPerBlock", "rewardPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerBlock",
      "rewardPerBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardToken(): Address {
    let result = super.call("rewardToken", "rewardToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardToken", "rewardToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakedToken(): Address {
    let result = super.call("stakedToken", "stakedToken():(address)", []);

    return result[0].toAddress();
  }

  try_stakedToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("stakedToken", "stakedToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  startBlock(): BigInt {
    let result = super.call("startBlock", "startBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startBlock", "startBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userInfo(param0: Address): SmartChefInitializable__userInfoResult {
    let result = super.call("userInfo", "userInfo(address):(uint256,uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return new SmartChefInitializable__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_userInfo(
    param0: Address
  ): ethereum.CallResult<SmartChefInitializable__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SmartChefInitializable__userInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  userLimit(): boolean {
    let result = super.call("userLimit", "userLimit():(bool)", []);

    return result[0].toBoolean();
  }

  try_userLimit(): ethereum.CallResult<boolean> {
    let result = super.tryCall("userLimit", "userLimit():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class EmergencyRewardWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyRewardWithdrawCall__Inputs {
    return new EmergencyRewardWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyRewardWithdrawCall__Outputs {
    return new EmergencyRewardWithdrawCall__Outputs(this);
  }
}

export class EmergencyRewardWithdrawCall__Inputs {
  _call: EmergencyRewardWithdrawCall;

  constructor(call: EmergencyRewardWithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EmergencyRewardWithdrawCall__Outputs {
  _call: EmergencyRewardWithdrawCall;

  constructor(call: EmergencyRewardWithdrawCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawCall__Inputs {
    return new EmergencyWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawCall__Outputs {
    return new EmergencyWithdrawCall__Outputs(this);
  }
}

export class EmergencyWithdrawCall__Inputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall__Outputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _stakedToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rewardToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _rewardPerBlock(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _startBlock(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _bonusEndBlock(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _poolLimitPerUser(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _numberBlocksForUserLimit(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _admin(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get _smartChefAddress(): Address {
    return this._call.inputValues[8].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RecoverTokenCall extends ethereum.Call {
  get inputs(): RecoverTokenCall__Inputs {
    return new RecoverTokenCall__Inputs(this);
  }

  get outputs(): RecoverTokenCall__Outputs {
    return new RecoverTokenCall__Outputs(this);
  }
}

export class RecoverTokenCall__Inputs {
  _call: RecoverTokenCall;

  constructor(call: RecoverTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RecoverTokenCall__Outputs {
  _call: RecoverTokenCall;

  constructor(call: RecoverTokenCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StopRewardCall extends ethereum.Call {
  get inputs(): StopRewardCall__Inputs {
    return new StopRewardCall__Inputs(this);
  }

  get outputs(): StopRewardCall__Outputs {
    return new StopRewardCall__Outputs(this);
  }
}

export class StopRewardCall__Inputs {
  _call: StopRewardCall;

  constructor(call: StopRewardCall) {
    this._call = call;
  }
}

export class StopRewardCall__Outputs {
  _call: StopRewardCall;

  constructor(call: StopRewardCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdatePoolLimitPerUserCall extends ethereum.Call {
  get inputs(): UpdatePoolLimitPerUserCall__Inputs {
    return new UpdatePoolLimitPerUserCall__Inputs(this);
  }

  get outputs(): UpdatePoolLimitPerUserCall__Outputs {
    return new UpdatePoolLimitPerUserCall__Outputs(this);
  }
}

export class UpdatePoolLimitPerUserCall__Inputs {
  _call: UpdatePoolLimitPerUserCall;

  constructor(call: UpdatePoolLimitPerUserCall) {
    this._call = call;
  }

  get _userLimit(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }

  get _poolLimitPerUser(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdatePoolLimitPerUserCall__Outputs {
  _call: UpdatePoolLimitPerUserCall;

  constructor(call: UpdatePoolLimitPerUserCall) {
    this._call = call;
  }
}

export class UpdateRewardPerBlockCall extends ethereum.Call {
  get inputs(): UpdateRewardPerBlockCall__Inputs {
    return new UpdateRewardPerBlockCall__Inputs(this);
  }

  get outputs(): UpdateRewardPerBlockCall__Outputs {
    return new UpdateRewardPerBlockCall__Outputs(this);
  }
}

export class UpdateRewardPerBlockCall__Inputs {
  _call: UpdateRewardPerBlockCall;

  constructor(call: UpdateRewardPerBlockCall) {
    this._call = call;
  }

  get _rewardPerBlock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateRewardPerBlockCall__Outputs {
  _call: UpdateRewardPerBlockCall;

  constructor(call: UpdateRewardPerBlockCall) {
    this._call = call;
  }
}

export class UpdateStartAndEndBlocksCall extends ethereum.Call {
  get inputs(): UpdateStartAndEndBlocksCall__Inputs {
    return new UpdateStartAndEndBlocksCall__Inputs(this);
  }

  get outputs(): UpdateStartAndEndBlocksCall__Outputs {
    return new UpdateStartAndEndBlocksCall__Outputs(this);
  }
}

export class UpdateStartAndEndBlocksCall__Inputs {
  _call: UpdateStartAndEndBlocksCall;

  constructor(call: UpdateStartAndEndBlocksCall) {
    this._call = call;
  }

  get _startBlock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _bonusEndBlock(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateStartAndEndBlocksCall__Outputs {
  _call: UpdateStartAndEndBlocksCall;

  constructor(call: UpdateStartAndEndBlocksCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
