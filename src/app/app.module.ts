import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MindmapModule} from "@jsplumb-components/mindmap-angular"


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MindmapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
