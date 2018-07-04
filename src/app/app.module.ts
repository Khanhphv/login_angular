import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule} from 'ngx-spinner';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './approute.module';
import { FormResisComponent } from './form-resis/form-resis.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard'
import { UserService} from './user.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormResisComponent,
    DashboardComponent
  ],
  imports:
  [
	  BrowserModule,
	  NgxSpinnerModule,
	  AppRoutes 
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
