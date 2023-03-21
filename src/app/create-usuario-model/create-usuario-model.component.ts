import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import swal from'sweetalert2';
import { UsuariosServicesService } from '../usuarios-services.service';

@Component({
  selector: 'app-create-usuario-model',
  templateUrl: './create-usuario-model.component.html',
  styleUrls: ['./create-usuario-model.component.css']
})
export class CreateUsuarioModelComponent {
  Nombre: string;
  Apellido: string;
  FechaNacimiento: string;
  FotoUsuario: any;
  EstadoCivil: number;
  TieneHermanos: string;

  constructor(
    public dialogRef: MatDialogRef<CreateUsuarioModelComponent>,
    private usuarioService: UsuariosServicesService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  crearUsuario()
  {
     
     if(this.Nombre === undefined)
     {
      swal.fire( "Error","El campo nombre es obligatorio", "error");
     }
     if(this.Apellido === undefined)
     {
      swal.fire( "Error","El campo apellido es obligatorio", "error");
     }
     if(this.FechaNacimiento === undefined)
     {
      swal.fire( "Error","El campo fecha nacimiento es obligatorio", "error");
     }
     if(this.EstadoCivil === undefined)
     {
      swal.fire( "Error","El campo estado civil es obligatorio", "error");
     }
     if(this.TieneHermanos === undefined)
     {
      swal.fire( "Error","El campo tiene hermanos es obligatorio", "error");
     }
     if(this.FotoUsuario === undefined)
     {
      swal.fire( "Error","Es obligatorio que cargues una foto", "error");
     }
    
    const crearUsuario = new FormData();
    crearUsuario.append('nombre', this.Nombre);
    crearUsuario.append('Imagen', this.FotoUsuario);
    crearUsuario.append('apellido', this.Apellido);
    crearUsuario.append('fechaNacimiento', this.FechaNacimiento);
    crearUsuario.append('estadoCivil', this.EstadoCivil.toString());
    crearUsuario.append('tieneHermanos', this.TieneHermanos === "1" ? "true":"false");
    this.usuarioService.crearUsuario(crearUsuario).subscribe(data =>{
      if(data.estado === true){
        swal.fire( "Guardado","Usuario Almacenado existosamente", "success");
        this.onNoClick();
      }
    },err =>{
      swal.fire( "No Guardado",err, "error");
      this.onNoClick();
    })
  }
  capturarArchivo(event: any) {
    // Obtenemos el objeto con la informacion del archivo
    const file = event.target.files[0];
    
    // Validamos si estamos capturando un archivo de Anexo
    if(event.target.id == 'FotoUsuario'){
      // Guardamos en la variable "archivoAnexo" el archivo seleccionado
      this.FotoUsuario = file;
    }
    
  }
  
}
