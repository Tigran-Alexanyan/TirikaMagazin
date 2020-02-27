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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpInterceptor} from '@angular/common/http';
import { OptionComponent } from './option/option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ServiceService } from './service/service.service';
// @ts-ignore
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    OptionComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [ServiceService, ItemsListComponent, OrderListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
