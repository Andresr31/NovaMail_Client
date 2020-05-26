import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    EditComponent,
    InboxComponent,
    OutboxComponent,
    CreateComponent,
    FormComponent,
    ShowMessageComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
