import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TextComponent } from './text/text.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CategoryComponent } from './category/category.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { OptionComponent } from './option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TextComponent,
    OrderListComponent,
    CategoryComponent,
    ItemsListComponent,
    LoginComponent,
    RegisterComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
