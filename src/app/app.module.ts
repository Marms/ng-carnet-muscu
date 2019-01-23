import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ExoTemplateListComponent} from './template-exo/exo-template-list/exo-template-list.component';
import {ExoTemplateComponent} from './template-exo/exo-template.component';
import {ExoTemplateDetailComponent} from './template-exo/exo-template-detail/exo-template-detail.component';
import {ExoTemplateItemComponent} from './template-exo/exo-template-list/exo-template-item/exo-template-item.component';
import {SeanceTemplateComponent} from './template-seance/seance-template.component';
import {SeanceTemplateEditComponent} from './template-seance/seance-template-edit/seance-template-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ExoTemplateService} from './template-exo/exo-template.service';
import {SeanceTemplateService} from './template-seance/seance-template.service';
import {AppRoutingModule} from './app-routing.module';
import {ExoTemplateEditComponent} from './template-exo/exo-template-edit/exo-template-edit.component';
import {ExoTemplateStartComponent} from './template-exo/exo-template-start/exo-template-start.component';
import {SeanceTemplateListComponent} from './template-seance/seance-template-list/seance-template-list.component';
import {SeanceTemplateItemComponent} from './template-seance/seance-template-list/seance-template-item/seance-template-item.component';
import {SeanceTemplateDetailComponent} from './template-seance/seance-template-detail/seance-template-detail.component';
import {FilterByNamePipe} from './template-seance/seance-template-edit/filter-by-name.pipe';
import {FilterExoSeancePipe} from './seance/seance-add-exercices/filter-exo-seance.pipe';
import {SeanceStartComponent} from './seance/seance-start/seance-start.component';
import {SeanceListComponent} from './seance/seance-list/seance-list.component';
import {SeanceNewComponent} from './seance/seance-new/seance-new.component';
import {SeanceItemComponent} from './seance/seance-list/seance-item/seance-item.component';
import {SeanceDetailComponent} from './seance/seance-detail/seance-detail.component';
import {SeanceService} from './seance/seance.service';
import {SeanceComponent} from './seance/seance.component';
import {SeanceAddExercicesComponent} from './seance/seance-add-exercices/seance-add-exercices.component';
import {ExerciseComponent} from './seance/exercise/exercise.component';
import {ExerciseListComponent} from './seance/exercise/exercise-list/exercise-list.component';
import {ExerciseItemComponent} from './seance/exercise/exercise-list/exercise-item/exercise-item.component';
import {FilterExoListPipe} from './seance/seance-detail/filter-exo-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExoTemplateListComponent,
    ExoTemplateComponent,
    ExoTemplateDetailComponent,
    ExoTemplateItemComponent,
    SeanceTemplateComponent,
    SeanceTemplateEditComponent,
    DropdownDirective,
    ExoTemplateEditComponent,
    ExoTemplateStartComponent,
    SeanceTemplateListComponent,
    SeanceTemplateItemComponent,
    SeanceTemplateDetailComponent,
    FilterByNamePipe,
    SeanceStartComponent,
    SeanceListComponent,
    SeanceNewComponent,
    SeanceItemComponent,
    SeanceDetailComponent,
    SeanceComponent,
    SeanceAddExercicesComponent,
    FilterExoSeancePipe,
    ExerciseComponent,
    ExerciseListComponent,
    ExerciseItemComponent,
    FilterExoListPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SeanceTemplateService, ExoTemplateService, SeanceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
