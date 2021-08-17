import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Episode, FilmsResponse } from '../interfaces/films.swapi.interface';
import { forkJoin, Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import { Character } from '../interfaces/characters.interface';
import { Starship } from '../interfaces/starships.interface';
import { Planet } from '../interfaces/planets.interface';

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

  getCharacters(characters: string[]):Observable<Character[]>
  {
    let requests:any = [];

    characters.forEach( characterUrl => {
      requests.push( this.http.get<Character>(characterUrl) );
    });

    return forkJoin( requests ) as Observable<Character[]>;
  }

  getStarships(starships: string[]):Observable<Starship[]>
  {
    let requests:any = [];

    starships.forEach( starshipUrl => {
      requests.push( this.http.get<Starship>(starshipUrl) );
    });

    return forkJoin( requests ) as Observable<Starship[]>;
  }

  getPlanets(planets: string[]):Observable<Planet[]>
  {
    let requests:any = [];

    planets.forEach( planetUrl => {
      requests.push( this.http.get<Planet>(planetUrl) );
    });

    return forkJoin( requests ) as Observable<Planet[]>;
  }
}
