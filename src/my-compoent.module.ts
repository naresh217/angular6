"use strict";

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { MyComponentComponent } from "./my-component.component";

@NgModule({
    declarations:[MyComponentComponent],
    imports:[BrowserModule],
    exports:[MyComponentComponent]
})
export class MyCompoentModule {}