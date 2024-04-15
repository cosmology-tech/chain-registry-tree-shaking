import { AssetList, Chain } from '@chain-registry/types';
import {
    assets,
    chains
} from 'chain-registry';

import type { PartialAssetList, PartialChain } from '../src';

it('Chain type', () => {
    // just to check types..
    const myChain: Chain = chains[0];
    expect(myChain.chain_id).toMatchSnapshot();
})

it('Chain simplified snap', () => {
    const myChain: PartialChain = {
        chain_name: chains[0].chain_name,
        chain_id: chains[0].chain_id,
        bech32_prefix: chains[0].bech32_prefix,
        slip44: chains[0].slip44,
        staking: chains[0].staking
    }
    expect(myChain).toMatchSnapshot();
})

it('AssetList type', () => {
    // just to check types..
    const myAssetList: AssetList = assets[0];
    expect(myAssetList.chain_name).toMatchSnapshot();
})

it('AssetList simplified snap', () => {
    const myAssetList: PartialAssetList = {
        chain_name: assets[0].chain_name,
        assets: assets[0].assets
    }
    expect(myAssetList).toMatchSnapshot();
})