import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { routes as homeRoutes } from './app.routes';
import { routes as lazyRoutes } from './pages/lazy/lazy.routes';

const routes: Routes = [
    ...homeRoutes,
    ...lazyRoutes
]

console.log('routes:', JSON.stringify(routes));

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }