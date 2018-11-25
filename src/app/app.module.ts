import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExoTemplateListComponent } from './template-exo/exo-template-list/exo-template-list.component';
import { ExoTemplateComponent } from './template-exo/exo-template.component';
import { ExoTemplateDetailComponent } from './template-exo/exo-template-detail/exo-template-detail.component';
import { ExoTemplateItemComponent } from './template-exo/exo-template-list/exo-template-item/exo-template-item.component';
import { ShoppingListComponent } from './template-seance/seance-template.component';
import { SeanceTemplateComponent } from './template-seance/seance-template-edit/seance-template.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ExoTemplateService } from './template-exo/exo-template.service';
import { SeanceTemplateService } from './template-seance/seance-template.service';
import { AppRoutingModule } from './app-routing.module';
import { ExoTemplateEditComponent } from './template-exo/exo-template-edit/exo-template-edit.component';
import { ExoTemplateStartComponent } from './template-exo/exo-template-start/exo-template-start.component';
import { SeanceTemplateListComponent } from './template-seance/seance-template-list/seance-template-list.component';
import { SeanceTemplateItemComponent } from './template-seance/seance-template-list/seance-template-item/seance-template-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExoTemplateListComponent,
    ExoTemplateComponent,
    ExoTemplateDetailComponent,
    ExoTemplateItemComponent,
    ShoppingListComponent,
    SeanceTemplateComponent,
    DropdownDirective,
    ExoTemplateEditComponent,
    ExoTemplateStartComponent,
    SeanceTemplateListComponent,
    SeanceTemplateItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SeanceTemplateService, ExoTemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
