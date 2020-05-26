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

const routes: Routes = [{ path: '', component: WelcomeComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'register', component: RegisterComponent },
                        { path: 'inbox', component: InboxComponent },
                        { path: 'outbox', component: OutboxComponent },
                        { path: 'home', component: IndexComponent },
                        { path: 'message/show', component: ShowMessageComponent },
                        { path: 'user', component: ShowUserComponent},
                        { path: 'message/create', component: CreateComponent },
                        { path: 'user/edit', component: EditComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
