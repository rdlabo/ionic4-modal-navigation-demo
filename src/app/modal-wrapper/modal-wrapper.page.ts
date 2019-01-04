import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, IonNav } from '@ionic/angular';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.page.html',
  styleUrls: ['./modal-wrapper.page.scss'],
})
export class ModalWrapperPage implements OnInit {

  constructor(
    @Optional() public nav: IonNav,
  ) { }

  ngOnInit() {}
  navigationPush() {
    this.nav.push(ModalWrapperPage);
  }
}
