import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [],
})
export class AppCommonModule {

    constructor( @Optional() @SkipSelf() parentModule: AppCommonModule) {
        if (parentModule) {
            throw new Error('AppCommonModule already loaded. Import into the root module only.');
        }
    }
}

// for inspiration: https://github.com/sean-perkins/nativescript-healthcare-app/blob/master/app/common/common.module.ts
