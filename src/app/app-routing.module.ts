import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AppComponent } from './app.component';
// AUTH components
// import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'sign-in', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'tasks', component: TasksComponent },
  { path: 'details/:id', component: TaskDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
