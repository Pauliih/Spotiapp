import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): String {
    if (!images) {
      return 'assets/img/noimage.png';
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }

  }

}
