import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-home', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-aboutme', component: AboutmeComponent },
  { path: 'app-technical-skills', component: TechnicalSkillsComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-resume', component: ResumeComponent },
  { path: '**', redirectTo: '/app-home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
