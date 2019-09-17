import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";

let urlHead: any = "";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {
    urlHead = environment.api;
  }

  GetMovie(urlTail: string): Observable<any> {
    return this.http.get(urlHead + "/" + urlTail).pipe(
      tap(
        () => { },

        catchError(error => {
          return this.handleError(error);
        })
      )
    );
  }

  Post(urlTail: string, data?: Object): Observable<any> {
    return this.http.post(urlHead + "/" + urlTail, data, httpOptions).pipe(
      tap(
        () => { },

        catchError(error => {
          return this.handleError(error);
        })
      )
    );
  }

  Delete(urlTail: string): Observable<any> {
    return this.http.delete(urlHead + "/" + urlTail, httpOptions).pipe(
      tap(
        () => { },

        catchError(error => {
          return this.handleError(error);
        })
      )
    );
  }

  handleError(error) {
    return error;
  }
}
