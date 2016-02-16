import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {UiTabs, UiPane} from './components/uitabs/ui_tabs';


import { DefaultComponent } from './default/default.component';
import { CaseComponent } from './case/case.component';
import { PrimarysourceComponent } from './primarysource/primarysource.component';
import { LiteratureComponent } from './literature/literature.component';
import { StudyComponent } from './study/study.component';
import { PatientComponent } from './patient/patient.component';

import { ReactionComponent } from './reaction/reaction.component';
import { TestComponent } from './test/test.component';
import { DrugComponent } from './drug/drug.component';
import { NarrativeComponent } from './narrative/narrative.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { SettingsComponent } from './settings/settings.component';
import { LogsComponent } from './logs/logs.component';
import { PrintReportComponent } from './printreport/printreport.component';
import { FindReportComponent } from './findreport/findreport.component';
import { DigemidComponent } from './digemid/digemid.component';

import { UsersComponent } from './users/users.component';
import { ApplicationsComponent } from './applications/applications.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsAppsComponent } from './groupsapps/groupsapps.component';
import { SyncAppsComponent } from './syncapps/syncapps.component';
import { ChangePasswordComponent } from './changepassword/changepassword.component';
import { HelpManualComponent } from './helpmanual/helpmanual.component';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';



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