import { Address, BigInt ,dataSource} from "@graphprotocol/graph-ts"

import { TrdcFactory, newpool } from "../generated/TrdcFactory/TrdcFactory"
import {SmartChefInitializable} from "../generated/templates"
import {
  Deposit,Initialize
} from "../generated/templates/SmartChefInitializable/SmartChefInitializable"
 import { ERC20 } from "../generated/TrdcFactory/ERC20";
import { facto,Pool ,User,Token} from "../generated/schema"
import {fetchTokenName,fetchTokenSymbol,fetchTokenDecimals} from "./erc20"
import {
  fetchEndBlock,
  fetchRewardPerBlock,
  fetchRewardToken,
  fetchStakeToken,
  fetchStartBlock,
  fetchUserLimit,
  getOrCreateSmartChef,
} from "./utils";

let ZERO_BI = BigInt.fromI32(0);
let ONE_BI = BigInt.fromI32(1);
export function handlenewpool(event: newpool): void {
  let id  = event.params.Pooladresss.toHex();
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let factory = facto.load(id);
  let pool = Pool.load(id)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!pool) {
    pool = new Pool(id)

  }
  if(!factory){
     factory = new facto(id);
  
  }
  factory.Factoryaddress = event.params.Pooladresss;
  factory.totalSmartChef = factory.totalSmartChef.plus(ONE_BI)
  // pool.amount = BigInt.fromI32(0)
//  pool.Staketoken = event.address;
//  pool.rewardtoken = event.address;
 pool.factoryad = event.params.Pooladresss;
 SmartChefInitializable.create(event.params.Pooladresss)
  //pool.create(event.params)
  // Entities can be written to the store with `.save()`

  factory.save()
  pool.save()

}

 function getOrCreateToken(address: Address): Token {
  let token = Token.load(address.toHex());
  if (token) {
    token = new Token(address.toHex());
    token.name = fetchTokenName(address);
    token.symbol = fetchTokenSymbol(address);
    token.decimals = fetchTokenDecimals(address);
    token.save();
  }


  return token as Token;
}


export function handleInitialize(event: Initialize): void {
  let id  = event.params.Pooladresss.toHex();
  // let stake  =event.params._stakedToken.toHex();
  // let reward  =event.params._rewardToken.toHex();
    let pool = Pool.load(id);
    if (!pool) {
      pool = new Pool(id)
  
    }  
  //  pool.Staketoken = event.params._stakedToken.toHex();
 
  let stakeToken = getOrCreateToken(event.params._stakedToken);
  let earnToken= getOrCreateToken(event.params._rewardToken);
  // pool.rewardtoken = event.params._rewardToken.toHex();

  // pool.Staketoken = getOrCreateToken(event.params._stakedToken).id;
  // pool.rewardtoken = getOrCreateToken(event.params._rewardToken).id;

  pool.Staketoken  = stakeToken.id;
  pool.rewardtoken = earnToken.id;
   pool.factoryad = event.params.Pooladresss;
   pool.reward = event.params._rewardPerBlock;
   pool.limit = event.params._poolLimitPerUser;
   pool.endBlock = event.params._bonusEndBlock;
   pool.timestamp = event.block.timestamp;
   pool.save()
   
  }
export function handleDeposit(event: Deposit): void {
let id  = event.transaction.hash.toHex();
  let pool = Pool.load(id);
  if (!pool) {
    pool = new Pool(id)

  }  
  let user = User.load(id);
   
  if (!user) {
    user = new User(id)

  }
user.stakeAmount = event.params.amount;
user.address= event.transaction.from;
user.pool  = pool.id;
pool.save();
user.save();  
}