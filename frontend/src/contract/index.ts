import { ethers } from 'ethers';
import y3dFactoryABI from './abi/y3dFactory.json';
import y3dTokenABI from './abi/y3dToken.json';
import IERC20_ABI from './abi/IERC20.json';
import UnitedMintABI from './abi/UnitedMint.json';

export const y3dFactory = new ethers.Contract(
  process.env.VUE_APP_Y3DFACTORY as string,
  y3dFactoryABI,
);

/**
 * CommonERC20 Contract
 * ALERT: you would need to .attach(address) this before using it, for real!
 */
export const CommonERC20 = new ethers.Contract(
  '0x0000000000000000000000000000000000000000',
  IERC20_ABI,
);

export const USDT = CommonERC20.attach('0xdac17f958d2ee523a2206206994597c13d831ec7');
export const yyCrv = CommonERC20.attach('0x199ddb4bdf09f699d2cf9ca10212bd5e3b570ac2');

/**
 * CommonERC20 Contract
 * ALERT: you would need to .attach(address) this before using it, for real!
 */
export const y3DToken = new ethers.Contract(
  '0x0000000000000000000000000000000000000000',
  y3dTokenABI,
);

export const UnitedMint = new ethers.Contract(
  '0x65a58b7725580fD83F92B0B22fc074BE7c610e78',
  UnitedMintABI,
);
