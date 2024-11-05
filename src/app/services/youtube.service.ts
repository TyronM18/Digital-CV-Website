import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private apiKey1 = 'AIzaSyCBos-rxWTlTvY6KQ6aTfKl_nNNwp37gLs';
  private playlistId1 = 'PLWsKlBCA9Pp59IvgKIJUN4lSpGmFx336m';

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
