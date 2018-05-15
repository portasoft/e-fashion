import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable"
import {Http} from "@angular/http"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'
import {Loja} from "./loja/loja.model"
import {MEAT_API} from "../app.api"
import {MenuItem} from "../loja-detail/menu-item/menu-item.model"

@Injectable()
export class LojasService{
  constructor(private http:Http){}

  lojas(): Observable<Loja[]>{
    return this.http.get(`${MEAT_API}/lojas`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  lojaById(id: string): Observable<Loja>{
    return this.http.get(`${MEAT_API}/lojas/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  reviewsOfLoja(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/lojas/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  menuOfLoja(id: string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/lojas/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

}
