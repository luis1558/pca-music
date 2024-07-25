import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "FACEBOOK",
      avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
      icon: "logo-facebook",
      description: "Meta Platforms, Inc.​​​, cuyo nombre comercial es Meta, es un conglomerado estadounidense de tecnología y redes sociales con sede en Menlo Park, California.",
      image: "https://marketing4ecommerce.net/wp-content/uploads/2023/10/historia-de-facebook.jpg"
      
    },
    {
      title: "INSTAGRAM",
      avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
      icon: "logo-instagram",
      description: "es una aplicación y red social propiedad de Meta. Creada por Kevin Systrom y Mike Krieger, fue lanzada el 6 de octubre de 2010. ",
      image: "https://static.mercadonegro.pe/wp-content/uploads/2022/11/10144256/instagram-programar-post.jpeg"
      
    },
    {
      title: "TWITTER",
      avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
      icon: "logo-twitter",
      description: "Twitter, Inc. fue una empresa de comunicaciones estadounidense que operaba varias plataformas de redes sociales, entre las que destacaban Twitter, Vine y Periscope.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Jb2RUNUzdgRymrJDiUR-gHMZitUgw-W5Dg&usqp=CAU"
      
    },
    {
      title: "TIKTOK",
      avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
      icon: "logo-tiktok",
      description: "es una red social de origen chino para compartir videos cortos y en formato vertical propiedad de la empresa china ByteDance.",
      image: "https://media.es.wired.com/photos/65f1fe84a80d75e987794b8b/master/pass/How-To-Save-Tik-Tok-Videos-Gear-1479771697.jpg"
      
    }
  ]

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  close() {
    //console.log("estoy cerrando")
    this.storage.set('isIntroShowed', true)
    this.router.navigateByUrl("/")
  }

}
