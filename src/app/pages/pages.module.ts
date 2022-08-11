import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AplicationComponent } from './aplication.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { NopageComponent } from './nopage/nopage.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    AplicationComponent,
    DetailsComponent,
    ListComponent,
    NopageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
    // AppRoutingModule
  ]
})
export class PagesModule {
  constructor(){
    console.log("pages modulo funcionando");
    
  }
}
