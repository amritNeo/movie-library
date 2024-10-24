import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class HttpClientApiService {
  
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMovieList() {
    // this.http.get('http://localhost:3000/api/movie-list', {
    //   params: { filter: 'all' },
    // }).subscribe(res => {
    //   console.log(res);
    //   this.movieList = res;
    // });
    return this.http.get(`${this.apiUrl}/movie-list`);
  }


  addMovie(movieData: any) {
    return this.http.post(`${this.apiUrl}/addMovie`, movieData);
  }


  deleteMovie(movie: number) {
    return this.http.post(`${this.apiUrl}/deleteMovie`, movie);
    // this.http.post('http://localhost:3000/api/deleteMovie', item, {
    //   reportProgress: true,
    //   observe: 'events',
    // }).subscribe(event => {
    //   console.log(event);
    // });
    // this.fetchMovieList();
  }
  deleteAllMovie() {
    return this.http.post(`${this.apiUrl}/deleteAll`, {});
    // console.log('deleteAll item ');
    // this.http.post('http://localhost:3000/api/deleteAll', {}, {
    //   reportProgress: true,
    //   observe: 'events',
    // }).subscribe(event => {
    //   console.log(event);
    // });
    // this.fetchMovieList();
  }
}
