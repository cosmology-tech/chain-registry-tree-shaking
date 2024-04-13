import { AssetList, Chain } from '@chain-registry/types';
import {
    assets,
    chain
} from 'chain-registry/mainnet/osmosis';

import type { PartialAssetList, PartialChain } from '../src';

it('Chain type', () => {
    // just to check types..
    const myChain: Chain = chain;
    expect(myChain.chain_id).toMatchSnapshot();
})

it('Chain simplified snap', () => {
    const myChain: PartialChain = {
        chain_name: chain.chain_name,
        chain_id: chain.chain_id,
        bech32_prefix: chain.bech32_prefix,
        slip44: chain.slip44,
        staking: chain.staking
    }
    expect(myChain).toMatchSnapshot();
})

it('AssetList type', () => {
    // just to check types..
    const myAssetList: AssetList = assets;
    expect(myAssetList.chain_name).toMatchSnapshot();
})

it('AssetList simplified snap', () => {
    const myAssetList: PartialAssetList = {
        chain_name: assets.chain_name,
        assets: assets.assets
    }
    expect(myAssetList).toMatchSnapshot();
})