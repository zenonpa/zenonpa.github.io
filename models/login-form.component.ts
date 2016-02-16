import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';
import { Login }     from './login';
@Component({
	selector: 'login-form',
	templateUrl: 'views/login-form.component.html'
})
export class LoginFormComponent {

	model = new Login(1, 'zenonpa', '123456', 'Zenon Paredes', 0);
	submitted = false;
	onSubmit() { this.submitted = true; }
	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.model); }
}