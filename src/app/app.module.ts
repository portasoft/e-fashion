import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import {RestaurantsService} from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './loja-detail/menu/menu.component';
import { ShoppingCartComponent } from './loja-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './loja-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './loja-detail/reviews/reviews.component'
import {ShoppingCartService} from './loja-detail/shopping-cart/shopping-cart.service';
import { LojasComponent } from './lojas/lojas.component';
import { LojaComponent } from './lojas/loja/loja.component';
import { LojasService } from './lojas/lojas.service';
import { LojaDetailComponent } from './loja-detail/loja-detail.component';

import { InputComponent } from './shared/input/input.component';
import { OrderComponent } from './order/order.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import {OrderService} from './order/order.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    LojasComponent,
    LojaComponent,
    LojaDetailComponent,
    InputComponent,
    OrderComponent,
    RadioComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ShoppingCartService,LojasService,OrderService,{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
