import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

    transform(value: string): string {
        return value.split('').reverse().join('');
    }

  // https://stackoverflow.com/questions/57226690/how-to-reverse-the-string-present-in-a-interpolation-in-a-html-template
}
