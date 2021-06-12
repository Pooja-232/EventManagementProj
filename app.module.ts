import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import routes, { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddEventComponent } from './eventcrud/add-event/add-event.component';
import { DeleteEventComponent } from './eventcrud/delete-event/delete-event.component';
import { EditEventComponent } from './eventcrud/edit-event/edit-event.component';
import { SearchByIdEventComponent } from './eventcrud/search-by-id-event/search-by-id-event.component';
import { ShowEventComponent } from './eventcrud/show-event/show-event.component';
import { ApicallService } from './apicall.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    DeleteEventComponent,
    EditEventComponent,
    SearchByIdEventComponent,
    ShowEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }


