/* eslint-disable prefer-const */
import { Address, bigInt, BigInt } from "@graphprotocol/graph-ts";
import { SmartChefInitializable as SmartChefContract } from "../generated/templates/SmartChefInitializable/SmartChefInitializable";
import { Pool } from "../generated/schema";
import {PancakeRouter} from "../generated/TrdcFactory/PancakeRouter"
import { ERC20 } from "../generated/templates/SmartChefInitializable/ERC20";
import {fetchTokenName,fetchTokenSymbol,fetchTokenDecimals} from "./erc20"
export let ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
let router = Address.fromString("0x10ED43C718714eb63d5aA57B78B54704E256024E");

// export function CalculatePrice(tokenAddres:Address):BigInt{
//         const BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" //BNB
//         let tokenDecimals = fetchTokenDecimals(tokenAddres);
//         let ONE_BI = BigInt.fromI32(1);
//         let Finaltoken  = ONE_BI.div(tokenDecimals)

//    // let router = await new web3.eth.Contract( pancakeSwapAbi, pancakeSwapContract );
//        let amountOut;
//       let Routercontract = PancakeRouter.bind(router);
//      amountOut = Routercontract.try_getAmountsOut(Finaltoken, [tokenAddres ,Address.fromString(BNBTokenAddress)]);
//     for(let i =0;i<amountOut.length ;i++){
      
//     }

  
//   // if(!amountOut) return  BigInt.fromI32(0);
//    return amountOut;

// }





export function fetchStakeToken(smartChefAddress: Address): Address {
  let contract = SmartChefContract.bind(smartChefAddress);
  let nameValue = Address.fromString(ADDRESS_ZERO);
  let nameResult = contract.try_stakedToken();
  if (!nameResult.reverted) {
    nameValue = nameResult.value;
  }

  return nameValue;
}

export function fetchRewardToken(smartChefAddress: Address): Address {
  let contract = SmartChefContract.bind(smartChefAddress);
  let nameValue = Address.fromString(ADDRESS_ZERO);
  let nameResult = contract.try_rewardToken();
  if (!nameResult.reverted) {
    nameValue = nameResult.value;
  }

  return nameValue;
}

export function fetchStartBlock(smartChefAddress: Address): BigInt {
  let contract = SmartChefContract.bind(smartChefAddress);
  let decimalValue = BigInt.fromI32(0);
  let decimalResult = contract.try_startBlock();
  if (!decimalResult.reverted) {
    decimalValue = decimalResult.value;
  }
  return decimalValue;
}

export function fetchEndBlock(smartChefAddress: Address): BigInt {
  let contract = SmartChefContract.bind(smartChefAddress);
  let decimalValue = BigInt.fromI32(0);
  let decimalResult = contract.try_bonusEndBlock();
  if (!decimalResult.reverted) {
    decimalValue = decimalResult.value;
  }
  return decimalValue;
}

export function fetchRewardPerBlock(smartChefAddress: Address): BigInt {
  let contract = SmartChefContract.bind(smartChefAddress);
  let decimalValue = BigInt.fromI32(0);
  let decimalResult = contract.try_rewardPerBlock();
  if (!decimalResult.reverted) {
    decimalValue = decimalResult.value;
  }
  return decimalValue;
}

export function fetchUserLimit(smartChefAddress: Address): BigInt {
  let contract = SmartChefContract.bind(smartChefAddress);
  let decimalValue = BigInt.fromI32(0);
  let decimalResult = contract.try_poolLimitPerUser();
  if (!decimalResult.reverted) {
    decimalValue = decimalResult.value;
  }
  return decimalValue;
}

export function getOrCreateSmartChef(address: Address): Pool {
  let id = address.toHex();
  let smartChef = Pool.load(id);
  if (smartChef === null) {
    smartChef = new Pool(id);
  }
  return smartChef as Pool;
}


