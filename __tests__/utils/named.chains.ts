import { osmosis } from 'interchain-registry/named';

it('list', () => {
    const result = osmosis.assets.assets.map(asset => asset.name);
    expect(result).toMatchSnapshot();
})

it('chain', () => {
    const result = osmosis.chain
    expect(result.chain_id).toMatchSnapshot();
})