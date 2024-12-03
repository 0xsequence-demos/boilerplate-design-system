import { ZodSchema } from 'zod';
import { ComponentProps } from 'react';
declare function FormComponent({ children, name, method, onAction, schema, ...rest }: {
    children: React.ReactNode | (({ errors, data, }: {
        errors: unknown;
        data: unknown;
    }) => React.ReactNode);
    schema?: ZodSchema;
    method?: "POST" | "GET" | "PUT" | "DELETE";
    onAction?: (event: React.FormEvent<HTMLFormElement>, data: Record<string, unknown>) => [Record<string, unknown> | string, boolean?] | void;
    name?: string;
} & ComponentProps<"form">): import("react/jsx-runtime").JSX.Element;
export declare const Form: typeof FormComponent;
export {};
