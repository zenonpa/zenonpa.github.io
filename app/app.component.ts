import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {UiTabs, UiPane} from './components/uitabs/ui_tabs';


import { DefaultComponent } from './default.component';
import { CaseComponent } from './case.component';
import { PrimarysourceComponent } from './primarysource.component';
import { LiteratureComponent } from './literature.component';
import { StudyComponent } from './study.component';
import { PatientComponent } from './patient.component';

import { ReactionComponent } from './reaction.component';
import { TestComponent } from './test.component';
import { DrugComponent } from './drug.component';
import { NarrativeComponent } from './narrative.component';
import { DashboardComponent } from './dashboard.component';


import { SettingsComponent } from './settings.component';
import { LogsComponent } from './logs.component';
import { PrintReportComponent } from './printreport.component';
import { FindReportComponent } from './findreport.component';
import { DigemidComponent } from './digemid.component';

import { UsersComponent } from './users.component';
import { ApplicationsComponent } from './applications.component';
import { GroupsComponent } from './groups.component';
import { GroupsAppsComponent } from './groupsapps.component';
import { SyncAppsComponent } from './syncapps.component';
import { ChangePasswordComponent } from './changepassword.component';
import { HelpManualComponent } from './helpmanual.component';

import { AboutComponent } from './about.component';
import { LoginComponent } from './login.component';



@Component({
  selector: 'pvsafety',
  templateUrl: 'app/app.component.html', 
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, UiTabs, UiPane],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
    {
      path: '/',
      name: 'Default',
      component: LoginComponent,
      useAsDefault: true
    },
   {
      path: '/case',
      name: 'Case',
      component: CaseComponent,
   },
   {
    path: '/primarysource',
    name: 'Primarysource',
    component: PrimarysourceComponent,
  },
  {
    path: '/literature',
    name: 'Literature',
    component: LiteratureComponent,
  },    
  {
    path: '/study',
    name: 'Study',
    component: StudyComponent,
  }, 
  {
    path: '/patient',
    name: 'Patient',
    component: PatientComponent,
  }, 

  {
    path: 'reaction',  
    name: 'Reaction',
    component: ReactionComponent
  },
  {
    path: 'test',  
    name: 'Test',
    component: TestComponent
  },
  {
    path: 'drug',  
    name: 'Drug',
    component: DrugComponent
  },
  {
    path: 'narrative',  
    name: 'Narrative',
    component: NarrativeComponent
  },

  {
    path: 'settings',
    name: 'Settings',
    component: SettingsComponent
  },
  {
    path: 'logs',
    name: 'Logs',
    component: LogsComponent
  },
  {
    path: 'printreport',
    name: 'PrintReport',
    component: PrintReportComponent
  },
  {
    path: 'findreport',
    name: 'FindReport',
    component: FindReportComponent
  },
  {
    path: 'digemid',
    name: 'Digemid',
    component: DigemidComponent
  },

  {
    path: 'users',
    name: 'Users',
    component: UsersComponent
  },

  {
    path: 'applications',
    name: 'Applications',
    component: ApplicationsComponent
  },
  {
    path: 'groups',
    name: 'Groups',
    component: GroupsComponent
  },

  {
    path: 'groupsapps',
    name: 'GroupsApps',
    component: GroupsAppsComponent
  },

  {
    path: 'syncapps',
    name: 'SyncApps',
    component: SyncAppsComponent
  },
  {
    path: 'changepassword',
    name: 'ChangePassword',
    component: ChangePasswordComponent
  },

  {
    path: 'helpmanual',
    name: 'HelpManual',
    component: HelpManualComponent
  },
  {
    path: 'login',
    name: 'Login',
    component: LoginComponent
  },

  {
    path: 'about',
    name: 'About',
    component: AboutComponent
  },


])
export class AppComponent {
  title = 'PVSafety Manager';

  Usuarios = 'Users';
}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/