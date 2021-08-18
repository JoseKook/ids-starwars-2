import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saber-mas',
  templateUrl: './saber-mas.component.html',
  styleUrls: ['./saber-mas.component.css']
})
export class SaberMasComponent implements OnInit
{
  edadValida: boolean = true;
  formulario: FormGroup = this.formBuilder.group({
    apellido   : ['', Validators.required],
    nombre     : ['', Validators.required],
    fecha      : [new Date(), [Validators.required, this.validarEdad] ]
  });

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  campoEsValido( campo: string ) {
    return this.formulario.controls[campo].errors
            && this.formulario.controls[campo].touched;
  }

  validarEdad( control: FormControl)
  {
    const fechaNacimiento = control.value;
    const fechaActual     = new Date() as any;

    if (fechaActual.getFullYear() - fechaNacimiento.getFullYear() < 18) {
      return { fecha: 'invalida'};
    }

    if (fechaActual.getFullYear() - fechaNacimiento.getFullYear() == 18) {

        //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
        if (fechaActual.getMonth() < fechaNacimiento.getMonth()) {
          return { fecha: 'invalida'};
        }
        if (fechaActual.getMonth() == fechaNacimiento.getMonth()) {
            //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
            if (fechaActual.getDate() < fechaNacimiento.getDate()) {
                return { fecha: 'invalida'};
            }
        }
    }
    return null;

    // https://www.aspsnippets.com/Articles/Date-of-Birth-Age-Validation-in-JavaScript.aspx

  }


  enviarFormulario()
  {

    if ( this.formulario.invalid )  {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log(this.formulario.value);

  }

}
