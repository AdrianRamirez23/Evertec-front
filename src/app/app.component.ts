import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUsuarioModelComponent } from './create-usuario-model/create-usuario-model.component';
import { DeleteUsuarioModelComponent } from './delete-usuario-model/delete-usuario-model.component';
import { EditUsuarioModelComponent } from './edit-usuario-model/edit-usuario-model.component';
import { UsuariosServicesService } from './usuarios-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usuarios-front';
  usuarios: any = []; 
  constructor(public dialog: MatDialog,
              private usuarioService: UsuariosServicesService){}
  
   ngOnInit()
   {
    this.listarUsuarios();
   }

  listarUsuarios()
  {
    this.usuarioService.listUsuarios().subscribe(data =>{
       this.usuarios = data.result;
    })
  }            


  abrirModalCrear()
  {
    let dialogRef = this.dialog.open(CreateUsuarioModelComponent, {
      height: '750px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listarUsuarios();
    });
}
  abrirModalEditar(usuarioId: string)
  {
    let dialogRef = this.dialog.open(EditUsuarioModelComponent, {
      height: '750px',
      width: '600px',
      data: {id: usuarioId}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listarUsuarios();
    });
  }
  abrirModalDelete(usuarioId: string)
  {
    let dialogRef = this.dialog.open(DeleteUsuarioModelComponent, {
      height: '350px',
      width: '600px',
      data: {id: usuarioId}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listarUsuarios();
    });
  }
 
}
