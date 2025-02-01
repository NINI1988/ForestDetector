import { Routes } from '@angular/router';
import { AnnotationEditorComponent } from './annotation-editor/annotation-editor.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:playerNumber', component: AnnotationEditorComponent }
];
