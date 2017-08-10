import { readFileSync, readFile ,stat,Stats} from 'fs';
import * as fs from 'fs';
import { dirname } from 'path';
import { Resolver } from 'stylable'; //peer
import { createStylesheetWithNamespace, resolveImports } from './stylable-transform';
import { ResolverFactory , CachedInputFileSystem, NodeJsInputFileSystem} from 'enhanced-resolve';
import {fsLike} from "./types";


export class FSResolver extends Resolver {
    private fs:fsLike;
    constructor(private prefix: string, private projectRoot:string, _fs:fsLike = fs) {
        super({});
        this.fs = _fs
    }
    resolveModule(path: string) {
        var resolved;
        if (path.match(/\.css$/)) {
            const eResolver = ResolverFactory.createResolver({
                fileSystem:this.fs,
                useSyncFileSystemCalls:true
            })

            if(path.indexOf(':\\')==-1){
                path = eResolver.resolveSync({},this.projectRoot,path);
            }
            //this.fsToUse.readFileSync("C:\\projects\\stylable-integration\\node_modules\\my-lib\\sources\\comp.css")
            resolved = createStylesheetWithNamespace(
                resolveImports(this.fs.readFileSync(path, 'utf8'), dirname(path),this.projectRoot).resolved,
                path,
                this.prefix
            );
        } else {
            resolved = require(path);
        }

        return resolved;
    }

}
