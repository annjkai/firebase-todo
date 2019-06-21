import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

// AUTH components
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
// import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full'},
  { path: 'log-in', component: LogInComponent},
  { path: 'register', component: RegisterComponent},
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'tasks', component: TasksComponent },
  { path: 'details/:id', component: TaskDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
