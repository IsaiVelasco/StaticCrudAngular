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
    precio:0,
    imagen:""
  }
  articulos=[
    {codigo:1, descripcion:"Papas", precio: 15.00, imagen:"https://itengoo.com/wp-content/uploads/2021/09/81NxIieAiWS._SL1500_.jpg"},
    {codigo:2, descripcion:"Donas", precio: 15.00,imagen:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750100011250L.jpg"},
    {codigo:3, descripcion:"Pan cortado", precio: 15.00,imagen:"https://frutilandiago.com/img/p/7/1/1/711-large_default.jpg"},
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
      precio:this.art.precio,
      imagen:this.art.imagen
    })
    this.art.codigo=0;
    this.art.descripcion="";
    this.art.precio=0;
    this.art.imagen="";
  }
  seleccionar(art:{codigo:number;descripcion:string;precio:number; imagen:string}){
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
    this.art.imagen = art.imagen;
  } 
  modificar(){
    this.articulos.forEach(a => {
      if(a.codigo == this.art.codigo){
        a.descripcion = this.art.descripcion;
        a.precio = this.art.precio;
        a.imagen = this.art.imagen;
        return;
      }
    });
    return("No existe articulo con ese codigo")
  }
  title = 'proyecto002';
}
