import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';


let urlHead: any = "";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
};


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _httpClient: HttpClient) {
    urlHead = environment.api;
  }


  GetUsers(urlTail: string): Observable<any> {
    return this._httpClient.get(urlHead + "/" + urlTail).pipe(
      tap(
        () => { },

        catchError(error => {
          return this.handleError(error);
        })
      )
    );
  }

  Post(urlTail: string, data?: Object): Observable<any> {
    return this._httpClient.post(urlHead + "/" + urlTail, data, httpOptions).pipe(
      tap(
        () => { },

        catchError(error => {
          return this.handleError(error);
        })
      )
    );
  }

  Delete(urlTail: string): Observable<any> {
    return this._httpClient.delete(urlHead + "/" + urlTail, httpOptions).pipe(
      tap(
        () => { },

        catchError(error => {
          return this.handleError(error);
        })
      )
    );
  }

  handleError(error: any) {
    return error;
  }
}
