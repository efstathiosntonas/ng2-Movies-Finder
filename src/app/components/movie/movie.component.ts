import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html'
})

export class MovieComponent implements OnInit{

  movie: Object;

  constructor(private _movieService: MovieService,
              private router: ActivatedRoute){

  }

  ngOnInit(){
    this.router.params.subscribe((params)=> {
      let id = params['id'];
      this._movieService.getMovie(id).subscribe(movie => {
        this.movie = movie;
      })
    })
  }
}
