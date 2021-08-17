import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saber-mas',
  templateUrl: './saber-mas.component.html',
  styleUrls: ['./saber-mas.component.css']
})
export class SaberMasComponent implements OnInit {
  nombre    : string = '';
  apellido  : string = '';
  fecha!    : Date;


  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario()
  {
  }

}
