import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ApiComponent } from './components/api/api.component';

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'input', component: InputComponent },
	{ path: 'tabla', component: TablaComponent },
	{ path: 'api', component: ApiComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
] 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);