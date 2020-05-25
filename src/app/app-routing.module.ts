import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { WelcomeComponent } from './Home/welcome/welcome.component';


const routes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
