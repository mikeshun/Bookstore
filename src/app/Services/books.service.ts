import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,Observable, catchError } from 'rxjs';
import { Books } from '../Models/books.model';
// import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

   BaseUrl = "http://localhost:9000";

  constructor(
    private http:HttpClient
  ) { }

  getBooks(): Observable<Array<Books>>{
    let items$ = this.http
      .get<Array<Books>>("http://localhost:9000/books").pipe(
      catchError(handleError));
      return items$;
  }

  addBook(item:Books) : Observable<Books> {
    let body = JSON.stringify(item);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let options = {headers:headers}

    let items$ = this.http.post<Books>("http://localhost:9000/books",body,options).pipe(
      catchError(handleError),);
    return items$;
  }

  editBook(item:Books): Observable<Books>{

    let body = JSON.stringify(item);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    let items$ = this.http 
    .put<Books>(this.BaseUrl,body,options).pipe(
    catchError(handleError));
    return items$;

    }

}

function handleError(error: HttpErrorResponse) {

	console.error(error);

	return observableThrowError(error.error);
}

