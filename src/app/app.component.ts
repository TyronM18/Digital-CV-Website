import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Platform } from '@ionic/angular';
import {
  IonButton,
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
} from '@ionic/angular/standalone';
import {
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
  construct,
  logoInstagram,
  logoLinkedin,
  logoGithub,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonButton,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
  ],
})
export class AppComponent {
  isMobile: boolean;
  public appPages = [
    { title: 'About me', url: '/folder/inbox', icon: 'bookmark' },
    { title: 'Development', url: '/dev', icon: 'construct' },
    { title: '3D Design and Printing', url: '/prints', icon: 'paper-plane' },
    { title: 'Contact', url: '/contact', icon: 'mail' },
  ];

  constructor(private platform: Platform) {
    addIcons({
      logoInstagram,
      logoLinkedin,
      logoGithub,
      mailOutline: mailOutline,
      mailSharp: mailSharp,
      paperPlaneOutline: paperPlaneOutline,
      paperPlaneSharp: paperPlaneSharp,
      heartOutline: heartOutline,
      heartSharp: heartSharp,
      archiveOutline: archiveOutline,
      archiveSharp: archiveSharp,
      trashOutline: trashOutline,
      trashSharp: trashSharp,
      warningOutline: warningOutline,
      warningSharp: warningSharp,
      bookmarkOutline: bookmarkOutline,
      bookmarkSharp: bookmarkSharp,
      constructOutline: construct,
      constructSharp: construct,
    });
    this.isMobile = this.platform.width() < 600;
    this.platform.resize.subscribe(() => {
      this.isMobile = this.platform.width() < 600;
    });
  }
}
