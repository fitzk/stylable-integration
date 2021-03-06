import { createCSSModuleString } from "./stylable-transform";
import { TransformHooks, Bundler, Stylable } from "stylable";



export interface StylableIntegrationOptions {
    injectBundleCss: boolean;
    nsDelimiter: string;
    filename: string;
    rootScope?: boolean;
    requireModule?: (moduleId: string) => any;
    skipBundle?: boolean;
    createStylableRuntimeModule?: typeof createCSSModuleString;
    transformHooks?: TransformHooks;
    bundleHook?: (
        compilation: any, 
        chunk: any, 
        bundler: Bundler, 
        stylable: Stylable, 
        files: string[],
        cssBundleFilename: string, 
        options: StylableIntegrationOptions) => void
}

export const StylableIntegrationDefaults: StylableIntegrationOptions = {
    skipBundle: false,
    rootScope: true,
    injectBundleCss: false,
    nsDelimiter: '💠',
    filename: '[name].css'
}
