import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BucketListItem } from './bucketlist/bucketlist.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = 'http://localhost:4000/api/users'; 
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: any;

  constructor(private http: HttpClient) {}

  // Register a new user
  registerUser(data: any): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Login user
  loginUser(data: any): Observable<any> {
    let url = `${this.baseUri}/login`;
    return this.http.post(url, data).pipe(
      map((response: any) => {
        if (response && response.user) {
          return response.user;  // Extracting the user object from the response
        }
        throw new Error('Invalid response format');
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update user
  updateUser(id: any, data: any): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(catchError(this.errorMgmt));
  }

  // Delete user
  deleteUser(id: any): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(catchError(this.errorMgmt));
  }

  // api.service.ts

  updateBucketList(userId: string, bucketList: BucketListItem[]): Observable<any> {
  const url = `${this.baseUri}/bucketlist`;
  return this.http.post(url, { userId, bucketList });
}

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    console.log('Error:', error); 
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
