export type SequenceBoilerplateContext = {
    name?: string;
    description?: string;
    useAuth?: boolean;
    githubUrl?: string;
    docsUrl?: string;
    faucetUrl?: string;
    wagmi?: Record<string, any>;
};
export declare const SequenceBoilerplateContext: import('react').Context<SequenceBoilerplateContext>;
