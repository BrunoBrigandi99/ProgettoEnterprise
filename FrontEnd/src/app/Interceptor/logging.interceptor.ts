/*import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.headers.get("authorization"))
    return next.handle(request);
  }
}
*/


import { HttpEvent, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, take, tap } from "rxjs";
import { AuthService } from "../Auth/auth.service";


// The JsonParser class acts as a base class for custom parsers and as the DI token.
@Injectable()
export abstract class JsonParser {
  abstract parse(text: string): any;
}



@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (!req.headers.has('Authorization')) {
      const modifiedReq = req.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        }
      });
      req = modifiedReq
    }
    return next.handle(req).pipe(
      tap((event) => {
        
        if (event instanceof HttpResponse && event.headers instanceof HttpHeaders) {
          let access_token = event.headers.get('access_token')
 
          if (access_token) this.auth.setToken("Bearer "+access_token)             
        
          // let refresh_token = event.headers.get('refresh_token')
          // console.log("refresh_token", refresh_token)
          // if (refresh_token) { this.auth.setToken(refresh_token) }

        }
      })
    )
  }
}