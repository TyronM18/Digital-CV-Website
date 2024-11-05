import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonLabel,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonCardTitle,
  IonCard,
  IonCardHeader,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.page.html',
  styleUrls: ['./dev.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonCardHeader,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DevPage implements OnInit {
  constructor() {}

  ngOnInit() {
    empty: String;
  }
}
