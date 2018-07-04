import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
  	private router: Router, private user: UserService ) { }

  ngOnInit() {
  }

  login(event){
  	event.preventDefault();
  	let user = event.target[0].value
  	let password = event.target[1].value
  	if(user == "admin" && password == "admin"){
  		this.user.setUserLoggedIn();
  		this.router.navigate(['/dashboard']);
  	}
  }
}
