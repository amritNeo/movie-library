import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientApiService } from '../http-client-api.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss'
})
export class AddMovieComponent implements OnInit {


  movieForm = new FormGroup({
    moviename: new FormControl(''),
    year: new FormControl(''),
  });

  constructor(  private httpClient: HttpClientApiService) { }

  ngOnInit(): void {

  }

  addMovie() {
    let movieData = {
      name: this.movieForm.value.moviename,
      year: this.movieForm.value.year,
      rating: ''
    }
    console.log(movieData);
    this.httpClient.addMovie(movieData).subscribe((data: any) => {
      console.log(data);
      this.movieForm.setValue({
        moviename: "",
        year: ""
      })
    });
  }

}