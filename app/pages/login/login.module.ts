import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LoginRouterModule } from './login-routing.module';
import { LoginPageComponent } from './login-page.component';

@NgModule({
    imports: [ LoginRouterModule ],
    exports: [],
    declarations: [ LoginPageComponent ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
