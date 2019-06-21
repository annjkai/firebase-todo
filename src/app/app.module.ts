import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

import { TasksService } from './shared/tasks.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DashboardComponent,
    TaskDetailComponent,
    LogInComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TasksService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
