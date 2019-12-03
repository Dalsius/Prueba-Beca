import { Component } from '@angular/core';
import { ServiciosService } from './services/servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  condicional: boolean;
  varTest = 6;
  var: string;

  constructor( public serviciosService: ServiciosService )
   { 
  this.condicional= true;
   }

  ngOnInit() 
{
    this.serviciosService.llamame().subscribe
  (
    (data) =>
    {
      console.log(data);
    }
  )
}

}

