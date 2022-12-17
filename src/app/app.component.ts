import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art = {
    codigo:0,
    descripcion:"",
    precio:0
  }
  articulos=[
    {codigo:1, descripcion:"Papas", precio: 15.00},
    {codigo:2, descripcion:"Donas", precio: 15.00},
    {codigo:3, descripcion:"Pan cortado", precio: 15.00},
    {codigo:4, descripcion:"Aceite", precio: 15.00},
    {codigo:5, descripcion:"Cafe", precio: 15.00},
  ]
  hayRegistros(){
    return this.articulos.length>0
  }

  borrar(codigo:number){
    for (let x = 0; x < this.articulos.length; x++) {
      if(this.articulos[x].codigo==codigo){
        this.articulos.splice(x,1);
        return;
      }
      
    }
  }
  agregar(){
    if(this.art.codigo==0){
      alert("El codigo debe ser MAYOR a cero");
      return;
    }
    if(this.articulos.filter(a=> a.codigo == this.art.codigo).length > 0){
      alert("Ya existe un producto con ese codigo");
      return;
    }
    

    this.articulos.push({
      codigo:this.art.codigo,
      descripcion:this.art.descripcion,
      precio:this.art.precio
    })
    this.art.codigo=0;
    this.art.descripcion="";
    this.art.precio=0;
  }
  seleccionar(art:{codigo:number;descripcion:string;precio:number}){
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  } 
  modificar(){
    this.articulos.forEach(a => {
      if(a.codigo == this.art.codigo){
        a.descripcion = this.art.descripcion;
        a.precio = this.art.precio;
        return;
      }
    });
    return("No existe articulo con ese codigo")
  }
  title = 'proyecto002';
}
