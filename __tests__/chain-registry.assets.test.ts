import { AssetList } from '@chain-registry/types';
import assets from 'chain-registry/mainnet/osmosis/assets';

import type { PartialAssetList } from '../src';

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