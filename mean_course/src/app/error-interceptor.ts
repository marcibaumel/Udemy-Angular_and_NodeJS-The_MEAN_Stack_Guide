import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { ErrorComponenet } from 'src/error/error.componenet';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        //alert(error.error.error.message);
        let errorMsg = 'An unknown error occurred';
        if(error.error.message){
          errorMsg = error.error.message;
        }
        this.dialog.open(ErrorComponenet, {data: {message: errorMsg}});
        return throwError(error);
      })
    );
  }
}
