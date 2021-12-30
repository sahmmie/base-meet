import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { CallPage } from './pages/call/call';
import { HomePage } from './pages/home/home';
import { StreamCreationComponent } from './stream-creation/stream-creation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stream-creation',
    component: StreamCreationComponent
  },
  {
    path: 'call',
    component: CallPage
  },
  {
    path: 'home',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
