import { Routes, RouterModule, PreloadAllModules} from '@angular/router'
import { NgModule } from '@angular/core'
import { FormResisComponent } from './form-resis/form-resis.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import {  AuthGuard } from './auth.guard'

const appRoutes: Routes =[
{
	path:'',
	component: LoginComponent
},
{
	path: 'resgister',
	component: FormResisComponent
},
{
	path:'dashboard',
	canActivate: [AuthGuard],
	component: DashboardComponent
}
]

@NgModule({
	imports : [
		RouterModule.forRoot(
			appRoutes,
		)
	],
	exports: [RouterModule]

})
export class AppRoutes {}