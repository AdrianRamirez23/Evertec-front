import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import swal from'sweetalert2';
import { UsuariosServicesService } from '../usuarios-services.service';

@Component({
  selector: 'app-edit-usuario-model',
  templateUrl: './edit-usuario-model.component.html',
  styleUrls: ['./edit-usuario-model.component.css']
})
export class EditUsuarioModelComponent {
  id: number;
  Nombre: string;
  Apellido: string;
  FechaNacimiento: string;
  FotoUsuario: any;
  EstadoCivil: number;
  TieneHermanos: string;
  FotoUsuarioBD: any;
 
  constructor(
    private usuarioService: UsuariosServicesService,
    public dialogRef: MatDialogRef<EditUsuarioModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id:string } 
  ) {}
  ngOnInit()
  {
   this.encontrarUsuario();
   console.log(this.FechaNacimiento);
  }
  encontrarUsuario()
  {

    this.usuarioService.UsuariosById(this.data.id).subscribe(data =>{
      let fecha = data.result.fechaNacimiento.split("T");
      this.Nombre = data.result.nombre;
      this.Apellido = data.result.apellido;
      this.FechaNacimiento = fecha[0];
      this.FotoUsuarioBD = data.result.fotoUsuario;
      
      this.EstadoCivil = data.result.estadoCivil;
      this.TieneHermanos = data.result.tieneHermanos ? "1": "2";
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  editarUsuario()
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
    crearUsuario.append('id', this.data.id);
    crearUsuario.append('imagen', this.FotoUsuario);
    crearUsuario.append('apellido', this.Apellido);
    crearUsuario.append('fechaNacimiento', this.FechaNacimiento.toString());
    crearUsuario.append('estadoCivil', this.EstadoCivil.toString());
    crearUsuario.append('tieneHermanos', this.TieneHermanos === "1" ? "true":"false");
    this.usuarioService.editarUsuario(crearUsuario).subscribe(data =>{
      if(data.estado === true){
        swal.fire( "Actualizado","Usuario Almacenado existosamente", "success");
        this.onNoClick();
      }
    },err =>{
      swal.fire( "No Actualizado",err, "error");
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
