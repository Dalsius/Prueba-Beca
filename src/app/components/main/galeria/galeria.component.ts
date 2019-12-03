import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  condicional: boolean;
  varTest = 6;
  var: string;
  fotos;

  constructor( public serviciosService: ServiciosService )
   { 
  this.condicional= true;
   }

  ngOnInit() {
    const response = this.serviciosService.llamame2().subscribe(
     (data) =>
     {
      this.fotos = data;
      console.log(data);
     }
    ); 
    console.log(response);
  };
  

}