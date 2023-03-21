import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosServicesService } from '../usuarios-services.service';
import { Inject } from '@angular/core';
import swal from'sweetalert2';

@Component({
  selector: 'app-delete-usuario-model',
  templateUrl: './delete-usuario-model.component.html',
  styleUrls: ['./delete-usuario-model.component.css']
})
export class DeleteUsuarioModelComponent {
  usuario: any;
  constructor(
    private usuarioService: UsuariosServicesService,
    public dialogRef: MatDialogRef<DeleteUsuarioModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id:string } 
  ) {}
  ngOnInit()
  {
   this.encontrarUsuario();
   
  }
  encontrarUsuario()
  {

    this.usuarioService.UsuariosById(this.data.id).subscribe(data =>{
      this.usuario = data.result;
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  eliminarUsuario(){
    if(this.usuario !== undefined)
    {
      this.usuarioService.deleteUsuario(this.data.id).subscribe(data =>{
        if(data.estado ){
          swal.fire( "Eliminado","Usuario Eliminado", "success");
          this.onNoClick();
        }
      },err =>{
        swal.fire( "Error",err, "error");
        this.onNoClick();
      })
    }
    
  }
}
