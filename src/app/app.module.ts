import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { AngularSectionComponent } from './components/angular-section/angular-section.component';
import { VueSectionComponent } from './components/vue-section/vue-section.component';
import { AngularProjectsPageComponent } from './pages/angular-projects-page/angular-projects-page.component';
import { VueProjectsPageComponent } from './pages/vue-projects-page/vue-projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularSectionComponent,
    VueSectionComponent,
    AngularProjectsPageComponent,
    VueProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
