import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExoTemplateComponent} from './template-exo/exo-template.component';
import {SeanceTemplateComponent} from './template-seance/seance-template.component';
import {ExoTemplateDetailComponent} from './template-exo/exo-template-detail/exo-template-detail.component';
import {ExoTemplateStartComponent} from './template-exo/exo-template-start/exo-template-start.component';
import {ExoTemplateEditComponent} from './template-exo/exo-template-edit/exo-template-edit.component';
import {SeanceTemplateEditComponent} from './template-seance/seance-template-edit/seance-template-edit.component';
import {SeanceTemplateDetailComponent} from './template-seance/seance-template-detail/seance-template-detail.component';
import {SeanceListComponent} from './seance/seance-list/seance-list.component';
import {SeanceNewComponent} from './seance/seance-new/seance-new.component';
import {SeanceDetailComponent} from './seance/seance-detail/seance-detail.component';
import {SeanceComponent} from './seance/seance.component';
import {SeanceAddExercicesComponent} from './seance/seance-add-exercices/seance-add-exercices.component';
import {ExerciseComponent} from './seance/exercise/exercise.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard';

const routes: Routes = [
  {
    path: 'exo-template', component: ExoTemplateComponent, canActivate: [AuthGuard], children: [
      {path: '', component: ExoTemplateStartComponent},
      {path: 'new', component: ExoTemplateEditComponent},
      {path: ':id', component: ExoTemplateDetailComponent},
      {path: ':id/edit', component: ExoTemplateEditComponent}
    ]
  }
  ,
  {
    path: 'sc-template', component: SeanceTemplateComponent, canActivate: [AuthGuard], children: [
      {path: 'new', component: SeanceTemplateEditComponent},
      {path: ':id', component: SeanceTemplateDetailComponent},
      {path: ':id/edit', component: SeanceTemplateEditComponent}
    ]
  },
  {
    path: 'seances', component: SeanceComponent, canActivate: [AuthGuard], children: [
      {path: '', component: SeanceListComponent},
      {path: 'new', component: SeanceNewComponent},
      {path: ':id', component: SeanceDetailComponent},
      {path: ':id/add', component: SeanceAddExercicesComponent},
      {path: ':id/exercise/:name', component: ExerciseComponent}
    ]
  }
  ,
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
  //, {path: '**', redirectTo: '/exoTemplate-template'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
