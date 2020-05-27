import { ReadBookComponent } from './pages/readBook/readBook.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
// import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "readBook/:id",
    component: ReadBookComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    // SharedModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
