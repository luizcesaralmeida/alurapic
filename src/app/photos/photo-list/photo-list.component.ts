import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Photo } from 'src/app/model/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  
  constructor( private activatedRoute: ActivatedRoute ) {}
  
  ngOnInit( ): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce
      .pipe( debounceTime( 400 ) )
      .subscribe( filter => this.filter = filter );
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
