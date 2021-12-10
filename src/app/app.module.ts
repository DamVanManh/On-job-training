import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { VideoComponent } from './video/video.component';
import { DialogVideoComponent } from './component/dialog-video/dialog-video.component';
import { SafePipe } from './shared/safe.pipe';
import { DialogSearchSettingComponent } from './component/dialog-search-setting/dialog-search-setting.component';

@NgModule({
  declarations: [AppComponent, VideoComponent, DialogVideoComponent, SafePipe, DialogSearchSettingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
