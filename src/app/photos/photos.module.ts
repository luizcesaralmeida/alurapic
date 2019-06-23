import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoService } from './photo/photo.service';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from '../pipes/filter-by-description.pipe';
import { PhotoListResolver } from '../resolvers/photo-list.resolver';



@NgModule({
    declarations: [ PhotoComponent,
                    PhotoListComponent,
                    PhotoFormComponent,
                    PhotosComponent,
                    FilterByDescriptionPipe  
                  ],
    imports:      [ HttpClientModule, 
                    CommonModule
                  ],
    providers:    [ PhotoService, 
                    PhotoListResolver 
                  ]
})
export class PhotosModule{}