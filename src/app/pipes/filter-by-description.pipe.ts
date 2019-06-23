import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../model/photo';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], queryParam: string): Photo[] {
    queryParam = queryParam.trim().toLowerCase();

    if(!queryParam.length)
      return photos;

    return photos.filter(photo => photo.description.toLowerCase().includes(queryParam));
  }

}
