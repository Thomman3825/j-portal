import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobItemsComponent } from './job-items/job-items.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobsComponent,
    JobItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
