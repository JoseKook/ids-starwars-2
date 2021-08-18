import { SaberMasComponent } from './saber-mas.component';
import { FormBuilder } from '@angular/forms';


describe('SaberMasComponent', () => {
  let component: SaberMasComponent;

  beforeEach( () => {
    component = new SaberMasComponent( new FormBuilder );
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it(' Debe crear un formulario con nombre, apellido y fecha de nacimiento', () => {

    expect(component.formulario.contains('nombre') ).toBeTruthy();
    expect(component.formulario.contains('apellido') ).toBeTruthy();
    expect(component.formulario.contains('fecha') ).toBeTruthy();
  });

  it(' El nombre, apellido y fecha deben ser obligatorios', () => {

    const nombre   = component.formulario.get('nombre');
    const apellido = component.formulario.get('apellido');
    const fecha    = component.formulario.get('fecha');
    nombre?.setValue('');
    apellido?.setValue('');
    fecha?.setValue('');

    expect( nombre?.valid ).toBeFalsy();
    expect( apellido?.valid ).toBeFalsy();
    expect( fecha?.valid ).toBeFalsy();

    expect( component.formulario.valid ).toBeFalsy();
  });

  it(' La edad debe ser mayor a 18 años', () => {

    // Es menor a 18 años
    const fecha    = component.formulario.get('fecha');
    fecha?.setValue(new Date('2004-12-17T03:24:00'));

    expect( fecha?.valid ).toBeFalsy();

    // Es mayor a 18 años
    fecha?.setValue(new Date('1996-12-17T03:24:00'));

    expect( fecha?.valid ).toBeTruthy();
  });

});
