import { ElementType, ComponentPropsWithoutRef, ComponentPropsWithRef, ComponentProps } from 'react';
export type BoxProps<T extends ElementType = "div"> = ComponentPropsWithoutRef<T> & {
    ref?: ComponentPropsWithRef<T>["ref"] | null;
};
export type PolymorphicRef<T extends ElementType = "div"> = BoxProps<T>["ref"];
export type ModifierOptions<Options extends Record<string, unknown> | null = Record<string, unknown>> = Options extends Record<string, unknown> ? {
    [K in keyof Options as `variant-${string & K}`]?: Options[K];
} & {
    subvariants?: Partial<Options>;
} : {
    subvariants?: Record<string, string>;
};
export type VariantOptions<BaseTheme extends string> = "none" | "initial" | BaseTheme;
export type WithVariants<Element extends ElementType, Variant extends string | null, Modifiers extends Record<string, unknown> | null> = {
    variant?: VariantOptions<Variant>;
} & (Modifiers extends null ? ModifierOptions<Record<string, string>> : ModifierOptions<Modifiers>) & ComponentProps<Element>;
