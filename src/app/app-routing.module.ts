import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateComponent} from './create/create.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'create',
  component: CreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
