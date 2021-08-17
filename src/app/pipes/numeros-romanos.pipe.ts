import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numerosRomanos'
})
export class NumerosRomanosPipe implements PipeTransform {

  transform(numero: number): string {
      if (typeof numero !== 'number')
      return '';

      var digits = String(+numero).split(""),
      key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
      "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
      "","I","II","III","IV","V","VI","VII","VIII","IX"],
      roman_num = "",
      i = 3;
      while (i--)
      roman_num = (key[+digits.pop()! + (i * 10)] || "") + roman_num;
      return Array(+digits.join("") + 1).join("M") + roman_num;
  }

  // https://www.codegrepper.com/code-examples/javascript/javascript+convert+numbers+to+roman+numerals+typescript

}
