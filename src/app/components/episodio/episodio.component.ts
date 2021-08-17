import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Episode } from 'src/app/interfaces/films.swapi.interface';
import { SwapiServiceService } from 'src/app/services/swapi-service.service';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent implements OnInit, OnDestroy
{
  getpisodeObserver : Subscription  = new Subscription();
  loading           : boolean       = true;
  episode!           : Episode;

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
      .subscribe( (episode) => {
        this.episode = episode;
        this.loading = false;

        console.log(this.episode);
      });

  }

  regresar() {
    this.router.navigate(['/']);
  }
}
