import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
   name : 'shortdate'
})
export class ShortdatePipe implements PipeTransform {
   transform(isoTime: string): string {
    let dtime=isoTime.split('-');
    let month=dtime[1];
    let dayx=dtime[2].split('T');
    let day=dayx[0];
    return month+"-"+day;
   }
}
