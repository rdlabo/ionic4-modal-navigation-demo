import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalWrapperPage } from '../modal-wrapper/modal-wrapper.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public modalController: ModalController
  ) {}
  async openModal() {
    const modal = await this.modalController.create({
      component: <any>ModalWrapperPage
    });
    await modal.present();
  }
}
