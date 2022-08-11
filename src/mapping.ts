import { Address, BigInt ,dataSource} from "@graphprotocol/graph-ts"

import { TrdcFactory, newpool } from "../generated/TrdcFactory/TrdcFactory"
import {
  Deposit
} from "../generated/templates/SmartChefInitializable/SmartChefInitializable"
import { facto,Pool ,User} from "../generated/schema"
let ZERO_BI = BigInt.fromI32(0);
let ONE_BI = BigInt.fromI32(1);
export function handlenewpool(event: newpool): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let factory = facto.load(event.transaction.hash.toHex());
  let pool = Pool.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!pool) {
    pool = new Pool(event.params.Pooladresss.toHex())

  }
  if(!factory){
     factory = new facto(event.transaction.hash.toHex());
  
  }
  factory.Factoryaddress = event.params.Pooladresss;
  factory.totalSmartChef = factory.totalSmartChef.plus(ONE_BI)
  // pool.amount = BigInt.fromI32(0)
 pool.Staketoken = event.address;
 pool.rewardtoken = event.address;
 pool.factoryad = event.params.Pooladresss;
  //pool.create(event.params)
  // Entities can be written to the store with `.save()`
  factory.save()
  pool.save()




}

export function handleDeposit(event: Deposit): void {
let id  = event.transaction.hash.toHex();
  let pool = Pool.load(event.transaction.hash.toHex());
  if (!pool) {
    pool = new Pool(event.transaction.hash.toHex())

  }  
  let user = User.load(event.transaction.hash.toHex());
   
  if (!user) {
    user = new User(event.transaction.hash.toHex())

  }
user.stakeAmount = event.params.amount;
user.address= event.transaction.from;
user.pool  = pool.id;
pool.save();
user.save();  
}