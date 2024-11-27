type FieldContext = {
    name: string;
    error?: string[];
};
declare const FieldContext: import('react').Context<FieldContext>;
export declare function useField(): FieldContext;
export declare function FieldProvider({ children, value, }: {
    children: React.ReactNode;
    value: FieldContext;
}): import("react/jsx-runtime").JSX.Element;
export {};
