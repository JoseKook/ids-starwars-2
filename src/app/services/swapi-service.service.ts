import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Episode, FilmsResponse } from '../interfaces/films.swapi.interface';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SwapiServiceService {

  constructor(private http: HttpClient) { }

  getEpisodes():Observable<FilmsResponse>
  {
    const url = `${ environment.swapiUrl }/films/`;
    return this.http.get<FilmsResponse>(url);
  }

  getEpisode(episode: number):Observable<Episode>
  {
    const url = `${ environment.swapiUrl }/films/${ episode }/`;
    return this.http.get<Episode>(url);
  }
}
