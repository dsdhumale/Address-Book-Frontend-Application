import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './routing/add-contact/add-contact.component';
import { HomeComponent } from './routing/home/home.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomeComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'add-contact/:personId', component: AddContactComponent },
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
