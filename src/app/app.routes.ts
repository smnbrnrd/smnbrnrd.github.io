import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ResearchComponent} from "./components/research/research.component";
import {PublicationsComponent} from "./components/publications/publications.component";
import {TeachingComponent} from "./components/teaching/teaching.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'research', component: ResearchComponent},
  { path: 'publications', component: PublicationsComponent},
  { path: 'teaching', component: TeachingComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
