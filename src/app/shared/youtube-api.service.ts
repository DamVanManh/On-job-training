import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchParams } from 'src/app/shared/model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  constructor(private http: HttpClient) {}
  API_KEY = 'AIzaSyDrWGEd2boDFCRvxh456B17A9F5u0pTEOc';
  API_KEY_2 = 'AIzaSyC8D7nBvn14ptgDG0ciPpmjJOBkQZyNBzY';
  BASE_ULR = 'https://www.googleapis.com/youtube/v3/';
  search(searchParams: SearchParams): Observable<any> {
    const SEARCH_URL = `${this.BASE_ULR}search?part=snippet&type=video`;
    let params = new HttpParams();
    params = searchParams.apiKey
      ? params.append('key', searchParams.apiKey)
      : params.append('key', this.API_KEY);
    params = searchParams.q ? params.append('q', searchParams.q) : params;
    params = searchParams.order
      ? params.append('order', searchParams.order)
      : params;
    params = searchParams.publishedAfter
      ? params.append('publishedAfter', searchParams.publishedAfter)
      : params;
    params = searchParams.publishedBefore
      ? params.append('publishedBefore', searchParams.publishedBefore)
      : params;
    params = searchParams.maxResults
      ? params.append('maxResults', searchParams.maxResults)
      : params;
    params = searchParams.pageToken
      ? params.append('pageToken', searchParams.pageToken)
      : params;

    return this.http.get<any>(SEARCH_URL, { params });
  }
  getVideoDetail(videoId: any): Observable<any> {
    const DETAIL_URL = `${this.BASE_ULR}videos?part=statistics,snippet,contentDetails`;
    let params = new HttpParams();
    params = params.append('id', videoId);
    params = params.append('key', this.API_KEY_2);
    return this.http.get<any>(DETAIL_URL, { params });
  }
}
