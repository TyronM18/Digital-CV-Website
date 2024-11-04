import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, construct } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent,
    IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'mail' },
    { title: 'Development', url: '/dev', icon: 'construct' },
    { title: '3D Design and Printing', url: '/prints', icon: 'paper-plane' },
  ];

  constructor() {
    addIcons({
      'mail-outline': mailOutline,
      'mail-sharp': mailSharp,
      'paper-plane-outline': paperPlaneOutline,
      'paper-plane-sharp': paperPlaneSharp,
      'heart-outline': heartOutline,
      'heart-sharp': heartSharp,
      'archive-outline': archiveOutline,
      'archive-sharp': archiveSharp,
      'trash-outline': trashOutline,
      'trash-sharp': trashSharp,
      'warning-outline': warningOutline,
      'warning-sharp': warningSharp,
      'bookmark-outline': bookmarkOutline,
      'bookmark-sharp': bookmarkSharp,
      'construct-outline': construct,
      'construct-sharp': construct,
    });
  }
}
