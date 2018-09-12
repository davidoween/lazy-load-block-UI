import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: 'ucomun',
    children: [
      { path: '', loadChildren: './modules/home.module#HomeModule' },
      { path: 'usuarios', loadChildren: './modules/usuarios.module#UsuariosModule' },
      { path: '**', redirectTo: 'ucomun' },
    ],
  },
  { path: '**', redirectTo: 'ucomun' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
