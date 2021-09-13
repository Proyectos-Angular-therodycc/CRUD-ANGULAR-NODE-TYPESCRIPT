import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { ConsoleComponent } from './console/console.component';
import { FormComponent } from './console/form/form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConsoleListComponent } from './console/console-list/console-list.component';
import { GameComponent } from './game/game.component';
import { GameListsComponent } from './game/game-lists/game-lists.component';
import { GameFormsComponent } from './game/game-forms/game-forms.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ConsoleComponent,
    FormComponent,
    ConsoleListComponent,
    GameComponent,
    GameListsComponent,
    GameFormsComponent,
    PagesComponent
  ],
  imports: [CommonModule, ComponentsModule, RouterModule, FormsModule],
  exports: [
    DashboardComponent,
    ConsoleComponent,
    FormComponent,
    ConsoleListComponent,
    GameComponent,
    GameListsComponent,
    GameFormsComponent
  ],
})
export class PageModule {}
