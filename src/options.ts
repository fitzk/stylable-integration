import { createCSSModuleString } from "./stylable-transform";
import { TransformHooks } from "stylable";



export interface StylableIntegrationOptions {
    injectBundleCss: boolean;
    nsDelimiter: string;
    filename: string;
    requireModule?: (moduleId: string) => any;
    skipBundle?: boolean;
    createStylableRuntimeModule?: typeof createCSSModuleString;
    transformHooks?: TransformHooks;
    
}

export const StylableIntegrationDefaults: StylableIntegrationOptions = {
    skipBundle: false,
    injectBundleCss: false,
    nsDelimiter: '💠',
    filename: '[name].css'
}
