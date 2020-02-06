import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';
import { UserComponent } from './components/user/user.component';

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'input', component: InputComponent },
	{ path: 'table', component: TableComponent },
	{ path: 'user', component: UserComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
] 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);