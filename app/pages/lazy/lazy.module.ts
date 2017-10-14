import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LazyRouterModule } from './lazy-routing.module';
import { LazyPageComponent } from './lazy-page.component';

@NgModule({
    imports: [ LazyRouterModule ],
    exports: [],
    declarations: [ LazyPageComponent ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LazyModule { }
