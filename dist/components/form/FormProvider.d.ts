import { Dispatch, SetStateAction } from 'react';
type FormContext = {
    name: string;
    data?: string | Record<string, unknown>;
    setData: Dispatch<SetStateAction<string | Record<string, unknown>>>;
    ref: React.MutableRefObject<HTMLFormElement | null>;
    errors: {
        fieldErrors: {
            [key: string]: string[];
        };
        formErrors: string[];
    };
    updateFields: typeof updateFields;
};
declare const FormContext: import('react').Context<FormContext>;
declare function updateFields(name: string, fields: Record<string, string>): void;
export declare function useForm(): FormContext;
export declare function FormProvider({ children, value, }: {
    children: React.ReactNode | ((value: FormContext) => React.ReactNode);
    value: FormContext;
}): import("react/jsx-runtime").JSX.Element;
export {};
