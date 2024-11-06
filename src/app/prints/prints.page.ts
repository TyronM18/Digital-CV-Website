import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { YoutubeService } from '../services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-prints',
  templateUrl: './prints.page.html',
  styleUrls: ['./prints.page.scss'],
  standalone: true,
  imports: [
    HttpClientModule,
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
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class PrintsPage implements OnInit {
  videoUrls: SafeResourceUrl[] = [];
  constructor(
    private youtubeService: YoutubeService,
    private sanitizer: DomSanitizer
  ) {
    console.log('YoutubeService:', this.youtubeService);
  }
  ngOnInit() {
    this.youtubeService
      .getprintsVid()
      .then((data) => {
        if (data && data.items) {
          this.videoUrls = data.items.map((item: any) => {
            const videoId = item.snippet.resourceId.videoId;

            const url = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&iv_load_policy=3`;
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  }
}
