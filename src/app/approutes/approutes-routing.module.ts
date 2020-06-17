import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { VoorraadComponent } from '../voorraad/voorraad.component';
import { ContactComponent } from '../contact/contact.component';
import { OverOnsComponent } from '../over-ons/over-ons.component';
import { NieuwbouwComponent } from '../nieuwbouw/nieuwbouw.component';
import { ImportComponent } from '../import/import.component';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'import', component: ImportComponent},
  {path: 'voorraad', component: VoorraadComponent},
  {path: 'nieuwbouw', component: NieuwbouwComponent},
  {path: 'over-ons', component: OverOnsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class ApproutesRoutingModule { }
