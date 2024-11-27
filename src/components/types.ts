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

export type ModifierOptions<
  Options extends Record<string, string> = Record<string, string>
> = Partial<Options>;

export type VariantOptions<BaseTheme extends string> =
  | "none"
  | "initial"
  | BaseTheme;

export type WithVariants<
  Element extends ElementType,
  Variant extends string,
  Modifiers
> = {
  variant?: VariantOptions<Variant>;
  mods?: Modifiers;
} & ComponentProps<Element>;
