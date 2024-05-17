import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import { AnimeService } from './anime.service';
import { dataAnime } from './dataAnime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent implements OnInit {
  animes: Array<Anime> = [];

  constructor(private animeService: AnimeService) {}

  getAnimeList(): Array<Anime> {
    return dataAnime;
  }

  getAnime(): void {
    this.animeService.getAnime().subscribe((animes) => {
      this.animes = animes;
    });
  }

  ngOnInit() {
    this.animes = this.getAnimeList();
  }
}
