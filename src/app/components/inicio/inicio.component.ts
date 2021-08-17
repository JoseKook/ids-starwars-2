import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Episode, FilmsResponse } from 'src/app/interfaces/films.swapi.interface';
import { SwapiServiceService } from 'src/app/services/swapi-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy
{
  episodesObserver  : Subscription  = new Subscription();
  episodes          : Episode[]     = [];
  loading           : boolean       = true;

    constructor(private swapiService: SwapiServiceService) { }

    ngOnInit() {

      this.initEpisodes();
    }

    ngOnDestroy(): void {
      this.episodesObserver.unsubscribe();
    }

    initEpisodes()
    {
      this.episodesObserver = this.swapiService.getEpisodes()
          .subscribe( (films: FilmsResponse) => {
            this.episodes = films.results;
            this.loading = false;

            console.log(this.episodes);
          });
    }

}
