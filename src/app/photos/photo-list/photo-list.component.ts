import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Photo } from 'src/app/model/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  constructor( private activatedRoute: ActivatedRoute,
               private photoService: PhotoService ) {}
  
  ngOnInit( ): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce
      .pipe( debounceTime( 400 ) )
      .subscribe( filter => this.filter = filter );
  }

  load():void {
    this.photoService.listFromUserPaginated( this.userName, ++this.currentPage )
      .subscribe( photos => {
        this.photos = this.photos.concat( photos )
        this.hasMore = !!photos.length
    } );
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
