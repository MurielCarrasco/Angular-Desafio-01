import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SidebarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
