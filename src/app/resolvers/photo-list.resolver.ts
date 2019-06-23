import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../model/photo';
import { PhotoService } from '../photos/photo/photo.service';

@Injectable()
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private photoService: PhotoService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        return this.photoService.listFromUser(route.params.userName);
    }

}