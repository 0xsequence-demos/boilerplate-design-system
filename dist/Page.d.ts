export type PageContext = {
    current: string;
    setCurrent: (current: string) => void;
};
export declare const PageContext: import('react').Context<PageContext>;
export declare function usePage(): PageContext;
export declare function Pages({ initial, children, }: {
    initial: string;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function Page({ children, name, }: {
    children: React.ReactNode;
    name: string;
}): import("react/jsx-runtime").JSX.Element;
