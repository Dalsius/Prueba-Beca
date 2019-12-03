import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  condicional: boolean;
  varTest = 6;
  var: string;
  comentarios;
  detalles;
  identificador;
  constructor( public serviciosService: ServiciosService )
   { 
  this.condicional= true;
  this.identificador = document.getElementById("ide"); 
   }

  ngOnInit() {
    const response = this.serviciosService.llamame().subscribe(
     (data) =>
     {
      console.log(data);
      this.comentarios = data;
     }
    ); 
    console.log(response);
  };
  
  desplegar( params) 
  {
    console.log(params);
    this.detalles = params;
  }

  filtrar()
  {
    if(this.comentarios=this.identificador)
    {
      
    }
  }
}
