import { default as React } from 'react';
import { SequenceBoilerplateContext } from './SequenceBoilerplateContext';
export type SequenceBoilerplateProps = {
    children: React.ReactNode;
} & SequenceBoilerplateContext;
export declare function SequenceBoilerplateProvider({ name, description, githubUrl, docsUrl, useAuth, faucetUrl, wagmi, children, }: SequenceBoilerplateProps): import("react/jsx-runtime").JSX.Element;
