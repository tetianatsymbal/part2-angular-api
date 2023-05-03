import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { UsersModule } from './users/users.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersComponent } from './users/users.component';
// import { UserFormComponent } from './user-form/user-form.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    // UsersComponent,
    // UserFormComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
