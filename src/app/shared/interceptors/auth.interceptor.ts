import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = "UMSYvy_PqobgHKB32vU9JPjDXRoOesfdkgjVZ4-PVOul4QDp";

    if(token) {
      request = request.clone({
        setHeaders: {
          apiKey: token,
        }
      });
    }

    return next.handle(request);
  }
}