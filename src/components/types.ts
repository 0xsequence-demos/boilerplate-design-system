import {
  ElementType,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ComponentProps,
} from "react";

export type BoxProps<T extends ElementType = "div"> =
  ComponentPropsWithoutRef<T> & {
    ref?: ComponentPropsWithRef<T>["ref"] | null;
  };

export type PolymorphicRef<T extends ElementType = "div"> = BoxProps<T>["ref"];

// export type ModifierOptions<
//   Options extends Record<string, string> = Record<string, string>
// > = Partial<Options>;

export type ModifierOptions<
  Options extends Record<string, unknown> | null = Record<string, unknown>
> = Options extends Record<string, unknown>
  ? {
      [K in keyof Options as `variant-${string & K}`]?: Options[K];
    } & {
      subvariants?: Partial<Options>;
    }
  : {
      subvariants?: Record<string, string>; // Return an empty object if Options is null
    };

export type VariantOptions<BaseTheme extends string> =
  | "none"
  | "initial"
  | BaseTheme;

// export type WithVariants<
//   Element extends ElementType,
//   Variant extends string,
//   Modifiers extends Record<string, string>
// > = {
//   variant?: VariantOptions<Variant>;
//   subvariants?: { [K in keyof Modifiers]?: Modifiers[K] }; //Partial<Modifiers>;
// } & ComponentProps<Element>;

export type WithVariants<
  Element extends ElementType,
  Variant extends string | null,
  Modifiers extends Record<string, unknown> | null
> = {
  variant?: VariantOptions<Variant>; // Single variant
} & (Modifiers extends null
  ? ModifierOptions<Record<string, string>> // Include variant-* and subvariants from ModifierOptions
  : ModifierOptions<Modifiers>) &
  ComponentProps<Element>; // Include all standard props for the element
