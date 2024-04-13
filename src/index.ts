import { AssetList, Chain } from '@chain-registry/types';

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>       // Makes elements of arrays DeepPartial
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>> // Handles readonly arrays
        : T[P] extends object
        ? DeepPartial<T[P]>            // Makes properties of objects DeepPartial
        : T[P];                         // Leaves non-object types unchanged
  };

  
export type PartialChain = DeepPartial<Chain>;
export type PartialAssetList = DeepPartial<AssetList>;

/*
 Look inside of __tests__ for how to use tree-shaking!
*/