import { ZodSchema } from 'zod';
import { ComponentProps } from 'react';
declare function ActionComponent({ children, intent, name, method, serverValidationOnly, onSubmit, schema, ...rest }: {
    children: React.ReactNode | (({ success, errors, data, }: {
        success: boolean;
        errors: unknown;
        data: unknown;
    }) => React.ReactNode);
    schema?: ZodSchema;
    method?: "POST" | "GET" | "PUT" | "DELETE";
    intent: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => boolean | void;
    name?: string;
    serverValidationOnly?: boolean;
} & ComponentProps<"form">): import("react/jsx-runtime").JSX.Element;
declare function ActionSuccess({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function ActionInitial({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const Action: typeof ActionComponent & {
    Success: typeof ActionSuccess;
    Initial: typeof ActionInitial;
};
export {};
