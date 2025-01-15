import { ZodObject } from 'zod';
import { ComponentProps, FormEvent } from 'react';
export type FormHandler<T = Record<string, any>> = (event: FormEvent<HTMLFormElement>, data: T) => FormHandlerReturn<T> | Promise<FormHandlerReturn<T> | void> | void;
type FormHandlerReturn<T = Record<string, unknown>> = [T, boolean];
type FormProps = {
    children: React.ReactNode | (({ errors, data, }: {
        errors: unknown;
        data: unknown;
    }) => React.ReactNode);
    schema?: ZodObject;
    method?: "POST" | "GET" | "PUT" | "DELETE";
    onAction?: FormHandler;
    name?: string;
} & ComponentProps<"form">;
declare function FormComponent({ children, name, method, onAction, schema, ...rest }: FormProps): import("react/jsx-runtime").JSX.Element;
export declare const Form: typeof FormComponent;
export {};
