import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()

export class ParamInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('jsonplaceholder.typicode.com')) {
        const paramReq = req;
         return next.handle(paramReq);
    } else {
        return next.handle(req);
    }
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    // constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const authHeader = this.auth.getToken();
        const authHeader = 'Bearer 1A2b3C4d5E6f7G8h9IAgBKClD';

        const authReq = req.clone({
            headers: req.headers.set(
                'Authorization',
               authHeader
            )
        });
        return next.handle(authReq);
    }
}

