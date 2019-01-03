import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalWrapperPage } from './modal-wrapper.page';

const routes: Routes = [
  {
    path: '',
    component: ModalWrapperPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalWrapperPage]
})
export class ModalWrapperPageModule {}
