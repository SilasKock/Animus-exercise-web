import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmentsComponent} from './apartments/apartments.component';
import { ApartmentCreateComponent} from './apartment-create/apartment-create.component';

const routes: Routes = [
  { path: '',
    component: ApartmentsComponent
  },
  {
    path: 'apartment-create',
    component: ApartmentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
