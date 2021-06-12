import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './eventcrud/add-event/add-event.component';
import { DeleteEventComponent } from './eventcrud/delete-event/delete-event.component';
import { EditEventComponent } from './eventcrud/edit-event/edit-event.component';
import { SearchByIdEventComponent } from './eventcrud/search-by-id-event/search-by-id-event.component';
import { ShowEventComponent } from './eventcrud/show-event/show-event.component';

const routes: Routes = [
  {
     path:'Show',
    component:ShowEventComponent
    
      },
      {
        path:'Edit',
        component:EditEventComponent
      },
      {
    path:'delete',
    component:DeleteEventComponent
      },
      {
        path:'GetById',
        component:SearchByIdEventComponent
      },
      {
        path:'AddEvent',
        component:AddEventComponent
      },
      {
        path:'OpenSignup',
        component:AddEventComponent
    
      }
    
];
export default routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
