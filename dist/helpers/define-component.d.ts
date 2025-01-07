import { VariantOptions } from '../components/types';
export declare function applyVariants<T>(variants: T): string;
export declare function convertSubvariantsToString<T>(subvariants: T): string;
export declare function extractSubvariantsFromAttributes<T>(props: any): Record<string, string>;
export declare function defineComponentFromProps<T extends {
    variant?: VariantOptions<string>;
}>(name: string, props: T): T & Record<string, string>;
