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
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpInterceptor} from '@angular/common/http';
import { OptionComponent } from './option/option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ServiceService } from './service/service.service';
// @ts-ignore
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProdajiComponent } from './prodaji/prodaji.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
// tslint:disable-next-line:import-spacing
import { MatNativeDateModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { ZakupkiComponent } from './zakupki/zakupki.component';
import { OptionOrderComponent } from './option-order/option-order.component';
import {MatButtonModule} from "@angular/material/button";
import { ItemsIncameComponent } from './items-incame/items-incame.component';
import { PrixodComponent } from './prixod/prixod.component';
import { RasxodComponent } from './rasxod/rasxod.component';


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
    ProdajiComponent,
    ZakupkiComponent,
    OptionOrderComponent,
    ItemsIncameComponent,
    PrixodComponent,
    RasxodComponent,
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
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [ServiceService, ItemsListComponent, OrderListComponent, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
