import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientApiService } from '../http-client-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  movieList: any = [];

  constructor(  private httpClient: HttpClientApiService) { }

  ngOnInit(): void {
    console.log('HomePageComponent')
    this.fetchMovieList();
  }

  fetchMovieList() {
    this.httpClient.getMovieList().subscribe((data: any) => {
      this.movieList = data;
    });
  }

  delete(item: any) {
    console.log('delete item : ', item);
    this.httpClient.deleteMovie(item).subscribe((data: any) => {
      this.fetchMovieList();
    });
  }

  deleteAll() {
    this.httpClient.deleteAllMovie().subscribe((data: any) => {
      this.fetchMovieList();
    });
  }

}
