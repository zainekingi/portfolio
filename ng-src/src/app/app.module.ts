import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TcsComponent } from './components/work/tcs/tcs.component';
import { SchoolListComponent } from './components/work/school-list/school-list.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { PrintCopyComponent } from './components/work/print-copy/print-copy.component';


// Application routes array.
var appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work/tcs', component: TcsComponent },
  { path: 'work/school-list', component: SchoolListComponent },
  { path: 'work/print-copy', component: PrintCopyComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent,
    TcsComponent,
    SchoolListComponent,
    PrintCopyComponent,
  ],
  imports: [
    RouterModule.forRoot (appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
