import { Address, BigInt ,dataSource} from "@graphprotocol/graph-ts"
import { ethereum } from '@graphprotocol/graph-ts'


import { TrdcFactory, NewSmartChefContract } from "../generated/TrdcFactory/TrdcFactory"
import {SmartChefInitializable} from "../generated/templates"
import {
  Deposit,Initialize,Withdraw,EmergencyWithdraw,NewStartAndEndBlocks,NewRewardPerBlock
} from "../generated/templates/SmartChefInitializable/SmartChefInitializable"
 import { ERC20 } from "../generated/TrdcFactory/ERC20";
import { facto,Pool ,User,Token,Toktest} from "../generated/schema"
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
export function handlenewpool(event: NewSmartChefContract): void {
  let id  = event.params.smartChef.toHex();
  let factory = facto.load(id);
  if(!factory){
     factory = new facto(id);
  
  }
  factory.Factoryaddress = event.address;
  factory.totalSmartChef = factory.totalSmartChef.plus(ONE_BI)
 SmartChefInitializable.create(event.params.smartChef)


}


//
 function getOrCreateToken(address: Address): Token {
  let token = Token.load(address.toHex());
  if (!token) {
    token = new Token(address.toHex());
    token.name = fetchTokenName(address);
    token.symbol = fetchTokenSymbol(address);
    token.decimals = fetchTokenDecimals(address);
    token.save();
  }


  return token as Token;
}

//

//

export function getOrCreateUser(poolAddress: Address, address: Address): User {
  const id = poolAddress.toHex() + "-" + address.toHex();

  let user = User.load(id);

  if (user === null) {
    user = new User(id);
    user.stakeAmount = BigInt.fromI32(0);
    user.pool = poolAddress.toHex();
    user.address = address;
    user.save();
  }

  return user as User;
}

//








export function handleInitialize(event: Initialize): void {
  let id  = event.params._pooladdress.toHex();

    let pool = Pool.load(id);
    if (!pool) {
      pool = new Pool(id)
  
    }  

  let stakeToken = getOrCreateToken(event.params._stakedToken);
  let earnToken= getOrCreateToken(event.params._rewardToken);
  // pool.rewardtoken = event.params._rewardToken.toHex();

  // pool.Staketoken = getOrCreateToken(event.params._stakedToken).id;
  // pool.rewardtoken = getOrCreateToken(event.params._rewardToken).id;

  pool.Staketoken  = stakeToken.id;
  pool.rewardtoken = earnToken.id;
  pool.factoryad = event.params._pooladdress;
  pool.reward = event.params._rewardPerBlock;
  pool.limit = event.params._poolLimitPerUser;
  pool.endBlock = event.params._bonusEndBlock;
  pool.timestamp = event.block.timestamp;
  pool.Totalstaked = ONE_BI;
  pool.save()
   
  }
// export function handleDeposita(event: Deposit): void {
// let id  = event.transaction.hash.toHex();
//   let pool = Pool.load(id);
//   if (!pool) {
//     pool = new Pool(id)

//   }  
//   let user = User.load(id);
   
//   if (!user) {
//     user = new User(id)

//   }
// // user.stakeAmount = event.params.amount;
// user.address= event.transaction.from;
// user.stakeAmount = user.stakeAmount.plus(event.params.amount);
// user.pool  = pool.id;
// pool.save();
// user.save();  
// }


export function handleDeposit(event: Deposit): void {
  const user = getOrCreateUser(dataSource.address(), event.params.user);
  const pool = getOrCreateSmartChef(dataSource.address());
  pool.Totalstaked = pool.Totalstaked.plus(event.params.amount);
  user.staketoken = pool.Staketoken;
  user.stakeAmount = user.stakeAmount.plus(event.params.amount);
  pool.save()
  user.save();
}


export function handleWithdraw(event: Withdraw): void {
  const user = getOrCreateUser(dataSource.address(), event.params.user);
  const pool = getOrCreateSmartChef(dataSource.address());
  user.stakeAmount = user.stakeAmount.minus(event.params.amount);
  pool.Totalstaked = pool.Totalstaked.minus(event.params.amount);
  pool.save()
  user.save();

}


export function handleEmergencyWithdraw(event: EmergencyWithdraw): void {
  const user = getOrCreateUser(dataSource.address(), event.params.user);
  user.stakeAmount = BigInt.fromI32(0);
  user.save();
}

// export function handleNewStartAndEndBlocks(event: NewStartAndEndBlocks): void {
//   const pool = getOrCreateSmartChef(dataSource.address());
//   //pool.startBlock = event.params.startBlock;
//   pool.endBlock = event.params.endBlock;
//   pool.save();
// }

// export function handleNewRewardPerBlock(event: NewRewardPerBlock): void {
//   const pool = getOrCreateSmartChef(dataSource.address());
//   // const earnToken = getOrCreateToken(Address.fromString(pool.earnToken));
// //  pool.reward = convertTokenToDecimal(event.params.rewardPerBlock, earnToken.decimals);
//   pool.save();
// }



// token.save()
