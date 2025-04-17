import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private apiKey1 = environment.YOUTUBE_API_KEY;
  private playlistId1 = environment.YOUTUBE_PLAYLIST_ID;

  constructor() {}

  getprintsVid(): Promise<any> {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${this.playlistId1}&maxResults=50&key=${this.apiKey1}`;
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }
}
