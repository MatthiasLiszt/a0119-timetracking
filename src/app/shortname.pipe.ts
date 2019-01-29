import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
   name : 'shortname'
})
export class ShortnamePipe implements PipeTransform {
   transform(name: string): string {
    let splitted=name.split(' ');
    let surName=splitted[0];
    let lastName=splitted[1];
    return lastName.charAt(0)+lastName.charAt(1)+lastName.charAt(2)+lastName.charAt(3);
   }
}