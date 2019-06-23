import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/model/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  
  constructor( private photoService: PhotoService,
               private activatedRoute: ActivatedRoute ){}
  
  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName as string;
    this.photoService.listFromUser(userName)
    .subscribe(photos => this.photos = photos
              ,error => console.log(error) 
      );
  }


}