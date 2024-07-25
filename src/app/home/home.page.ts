import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  artistsJson: any;
  artists: any;

  constructor(private router: Router, private musicService: MusicService) {}

  ngOnInit() {
    this.artistsJson = this.musicService.getArtistsJson().artists;
    console.log("json",this.artistsJson)
    /*this.musicService.getArtists().subscribe((data:any) => {
      this.artists = data;
      console.log(this.artists)
    })*/
   this.musicService.getArtists().then(data => {
    this.artists = data;
    console.log(data)
   })
  }

  intro() {
    this.router.navigateByUrl("/intro")
  }

}
