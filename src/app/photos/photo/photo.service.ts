import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/model/photo';

const API = 'http://localhost:3000';

@Injectable()
export class PhotoService{

    constructor(private httpClient: HttpClient ){}

    listFromUser(userName: string): Observable<Photo[]>{
        return this.httpClient.get<Photo[]>(`${API}/${userName}/photos`);
    }
}