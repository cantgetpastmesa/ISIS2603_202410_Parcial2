import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private apiUrl: string = environment.baseUrl + 'anime';

  constructor(private http: HttpClient) {}

  getAnime(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);
  }
}
