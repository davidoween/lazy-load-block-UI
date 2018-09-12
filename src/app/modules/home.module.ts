import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from '../home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent
      }
    ])
  ],
  exports: [
    HomePageComponent
  ]

})
export class HomeModule { }
