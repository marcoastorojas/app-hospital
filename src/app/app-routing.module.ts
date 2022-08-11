import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing.module';
import { NopageComponent } from './pages/nopage/nopage.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: "application", loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule) },
  { path: "", redirectTo: "application", pathMatch: "full" },
  { path: "**", component: NopageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
