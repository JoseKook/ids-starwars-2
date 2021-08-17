import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Character } from 'src/app/interfaces/characters.interface';
import { Episode } from 'src/app/interfaces/films.swapi.interface';
import { Planet } from 'src/app/interfaces/planets.interface';
import { Starship } from 'src/app/interfaces/starships.interface';
import { SwapiServiceService } from 'src/app/services/swapi-service.service';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent implements OnInit, OnDestroy
{
  getpisodeObserver : Subscription  = new Subscription();
  loadingEpisode    : boolean       = true;
  loadingCharacters : boolean       = true;
  loadingStarships  : boolean       = true;
  loadingPlanets    : boolean       = true;
  episode!          : Episode;
  characters        : Character[]   = [];
  planets           : Planet[]      = [];
  starships         : Starship[]    = [];

  constructor(  private router: Router,
                private activatedRoute: ActivatedRoute,
                private swapiService: SwapiServiceService
  ) { }

  ngOnInit(): void {
    this.getIdEpisode();
  }

  ngOnDestroy(): void {
    this.getpisodeObserver.unsubscribe();
  }

  getIdEpisode()
  {
    this.getpisodeObserver =
    this.activatedRoute.params
      .pipe(
        switchMap( ({ episode }) => this.swapiService.getEpisode(episode) )
      )
      .subscribe( ( episode ) => {
        this.episode = episode;
        this.loadingEpisode = false;

        console.log(this.episode);

        this.getCharacters();
        this.getStarships();
        this.getPlanets();
      });
  }

  getCharacters(){
    this.swapiService.getCharacters(this.episode.characters)
      .subscribe( ( results ) => {
        this.characters = results;
        this.loadingCharacters = false;
      });
  }

  getStarships(){
    this.swapiService.getStarships(this.episode.starships)
      .subscribe( (results) => {
        this.starships = results;
        this.loadingStarships = false;
      });
  }

  getPlanets(){
    this.swapiService.getPlanets(this.episode.planets)
      .subscribe((results) => {
        this.planets = results;
        this.loadingPlanets = false;
      });
  }

  regresar() {
    this.router.navigate(['/']);
  }
}
