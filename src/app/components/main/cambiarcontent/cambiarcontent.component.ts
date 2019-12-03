import { Component, OnInit, Input } from '@angular/core';
import { DetalleModel } from 'src/app/models/detalle.model';



@Component({
  selector: 'app-cambiarcontent',
  templateUrl: './cambiarcontent.component.html',
  styleUrls: ['./cambiarcontent.component.css']
})
export class CambiarcontentComponent implements OnInit {
  @Input() detallitos;
  constructor() { }

  ngOnInit() {
  }

}
