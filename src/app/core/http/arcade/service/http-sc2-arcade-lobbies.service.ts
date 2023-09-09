import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestOptions } from '@core/http/base/model';
import { HttpBase } from '@core/http/base/service/http-base.abstract';
import { Observable } from 'rxjs';
import { SC2_ARCADE_LOBBIES } from '../model';
import { HttpLobby } from '../model/http-lobby.model';

@Injectable({
  providedIn: 'root',
})
export class HttpSc2ArcadeLobbiesService extends HttpBase {
  constructor(private http: HttpClient) {
    super();
  }

  getActiveLobbies(
    httpRequestOptions?: HttpRequestOptions
  ): Observable<HttpLobby[]> {
    const getActiveLobbiesRequest$ = this.http.get<HttpLobby[]>(
      `${SC2_ARCADE_LOBBIES()}active`
    );

    return this.request(getActiveLobbiesRequest$, httpRequestOptions);
  }
}
