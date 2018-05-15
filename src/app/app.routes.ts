import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'

import {AboutComponent} from './about/about.component'



import {LojasComponent} from './lojas/lojas.component'
import {LojaDetailComponent} from './loja-detail/loja-detail.component'

import {MenuComponent} from './loja-detail/menu/menu.component'

import {ReviewsComponent} from './loja-detail/reviews/reviews.component'
import {OrderComponent} from './order/order.component'

export const ROUTES: Routes =[

    {path: '', component: HomeComponent},
    {path: 'lojas', component: LojasComponent},
    {path: 'lojas/:id', component: LojaDetailComponent,
      children: [
        {path: '', redirectTo: 'menu', pathMatch:'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
      ]},
    {path: 'about', component: AboutComponent},
    {path: 'order', component: OrderComponent},
]
