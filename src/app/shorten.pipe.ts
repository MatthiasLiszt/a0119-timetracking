import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
   name : 'shorten'
})
export class ShortenPipe implements PipeTransform {
   transform(name: string): string {
    return name.charAt(0);
   }
}