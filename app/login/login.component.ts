import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/login/login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Sign in';
  account = 'Account';
  password = 'Password';
  forgot = 'Forgot credentials?';



}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/