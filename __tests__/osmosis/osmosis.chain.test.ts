import chain from '@chain-registry/osmosis/chain';
import { Chain } from '@chain-registry/types';

import type { PartialChain } from '../../src';

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