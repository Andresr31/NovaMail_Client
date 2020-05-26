import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { WelcomeComponent } from './Home/welcome/welcome.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { IndexComponent } from './User/index/index.component';
import { EditComponent } from './User/edit/edit.component';
import { InboxComponent } from './Message/inbox/inbox.component';
import { OutboxComponent } from './Message/outbox/outbox.component';
import { CreateComponent } from './Message/create/create.component';
import { FormComponent } from './Message/form/form.component';
import { ShowMessageComponent } from './Message/show-message/show-message.component';
import { ShowUserComponent } from './User/show-user/show-user.component';
import { AuthGuardGuard} from './Guards/auth-guard.guard';

const routes: Routes = [{ path: '', component: WelcomeComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'register', component: RegisterComponent },
                        { path: 'inbox', component: InboxComponent, canActivate:[AuthGuardGuard]},
                        { path: 'outbox', component: OutboxComponent,canActivate:[AuthGuardGuard] },
                        { path: 'users', component: IndexComponent,canActivate:[AuthGuardGuard] },
                        { path: 'message/show', component: ShowMessageComponent,canActivate:[AuthGuardGuard] },
                        { path: 'user', component: ShowUserComponent,canActivate:[AuthGuardGuard]},
                        { path: 'message/create', component: CreateComponent,canActivate:[AuthGuardGuard] },
                        { path: 'user/edit', component: EditComponent,canActivate:[AuthGuardGuard] }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
