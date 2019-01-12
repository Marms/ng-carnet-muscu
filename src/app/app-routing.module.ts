import {Route} from '@angular/router';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExoTemplateComponent} from './template-exo/exo-template.component';
import {SeanceTemplateComponent} from './template-seance/seance-template.component';
import {ExoTemplateDetailComponent} from './template-exo/exo-template-detail/exo-template-detail.component';
import {ExoTemplateStartComponent} from './template-exo/exo-template-start/exo-template-start.component';
import {ExoTemplateEditComponent} from './template-exo/exo-template-edit/exo-template-edit.component';
import {SeanceTemplateEditComponent} from './template-seance/seance-template-edit/seance-template-edit.component';
import {SeanceTemplateDetailComponent} from './template-seance/seance-template-detail/seance-template-detail.component';

const routes: Routes = [
  {
    path: 'exoTemplate-template', component: ExoTemplateComponent, children: [
      {path: '', component: ExoTemplateStartComponent},
      {path: 'new', component: ExoTemplateEditComponent},
      {path: ':id', component: ExoTemplateDetailComponent},
      {path: ':id/edit', component: ExoTemplateEditComponent}
    ]
  }
  ,
  {
    path: 'sc-template', component: SeanceTemplateComponent, children: [
      {path: 'new', component: SeanceTemplateEditComponent},
      {path: ':id', component: SeanceTemplateDetailComponent},
      {path: ':id/edit', component: SeanceTemplateEditComponent}
      ]
  },
  {path: '**', redirectTo: '/exoTemplate-template'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
