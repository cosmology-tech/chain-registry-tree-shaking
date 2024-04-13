import { agoric } from '@chain-registry/assets';

it('list', () => {
    // const result = agoric.map(asset => asset.name);
    const result = agoric.default.assets.map(asset => asset.name);
    expect(result).toMatchSnapshot();
})
