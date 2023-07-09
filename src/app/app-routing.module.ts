import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AngularProjectsPageComponent } from './pages/angular-projects-page/angular-projects-page.component';
import { VueProjectsPageComponent } from './pages/vue-projects-page/vue-projects-page.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'angularProjectsPage', component: AngularProjectsPageComponent},
  {path: 'vueProjectsPage', component: VueProjectsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
