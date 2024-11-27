type FormContext = {
    intent: string;
    name: string;
    data?: Record<string, unknown>;
    success: boolean;
    ref: React.MutableRefObject<HTMLFormElement | null>;
    errors: {
        fieldErrors: {
            [key: string]: string[];
        };
        formErrors: string[];
    };
};
declare const FormContext: import('react').Context<FormContext>;
export declare function useForm(): FormContext;
export declare function FormProvider({ children, value, }: {
    children: React.ReactNode | ((value: FormContext) => React.ReactNode);
    value: FormContext;
}): import("react/jsx-runtime").JSX.Element;
export {};