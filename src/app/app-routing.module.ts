import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ConsoleListComponent } from './pages/console/console-list/console-list.component';
import { ConsoleComponent } from './pages/console/console.component';
import { FormComponent } from './pages/console/form/form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GameFormsComponent } from './pages/game/game-forms/game-forms.component';
import { GameListsComponent } from './pages/game/game-lists/game-lists.component';
import { GameComponent } from './pages/game/game.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', redirectTo: '/games/list', pathMatch: 'full' },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'console',
        component: ConsoleComponent,
        children: [
          { path: 'form', component: FormComponent },
          { path: 'list', component: ConsoleListComponent },
          { path: 'edit/:id', component: FormComponent },
        ],
      },

      { path: 'games', redirectTo: 'games/list' },
      {
        path: 'games',
        component: GameComponent,
        children: [
          { path: 'add', component: GameFormsComponent },
          { path: 'list', component: GameListsComponent },
          { path: 'edit/:id', component: GameFormsComponent },
        ],
      },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },

  { path: '**', redirectTo: 'games/list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
