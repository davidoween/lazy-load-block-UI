import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from '../users-list/users-list.component';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersListComponent
      }
    ]),
  ],
  providers: [
  ],
  exports: [
    UsersListComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]  // IMPORTANTE.

})
export class UsuariosModule { }
