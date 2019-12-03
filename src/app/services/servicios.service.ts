import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService 
{
  urlaobtener: string;
  urlaobtener2: string;

  constructor
  (
    private http: HttpClient
  )
  {
   this.urlaobtener = environment.tabla;
   this.urlaobtener2 = environment.galeria;
  }

  llamame()
  {
  console.log(this.urlaobtener);
  return this.http.get(this.urlaobtener);
  }
  llamame2()
  {
  console.log(this.urlaobtener2);
  return this.http.get(this.urlaobtener2);
  }
}

