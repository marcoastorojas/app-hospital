import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationComponent } from './aplication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const routes:Routes=[
  {
    path: "application",
    component: AplicationComponent,
    children:[
      {path:"dashboard",component:DashboardComponent},
      {path:"detail",component:DetailsComponent},
      {path:"list",component:ListComponent},
      {path:"",redirectTo:"dashboard", pathMatch:"full"}
    ]
  },
]


@NgModule({
  declarations: [
    
  ],
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
