import { CONTRACTS } from '../config';

export function getContractAddress(key: keyof typeof CONTRACTS) {
  return CONTRACTS[key] as `0x${string}`;
}
