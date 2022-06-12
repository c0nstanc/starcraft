import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { LoggingService } from '../logging/logging.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlingService implements ErrorHandler {

  private httpServerSideErrorOccurredSubject$ = new Subject<HttpErrorResponse>();

  get httpServerErrorOccurred$(): Observable<HttpErrorResponse> {
    return this.httpServerSideErrorOccurredSubject$.asObservable();
  }

  constructor(
    private loggingService: LoggingService,
  ) { }

  handleError(error: Error | HttpErrorResponse): boolean {
    let errorMessage = '';
    let handled = false;

    if (error instanceof HttpErrorResponse) {

      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Error Event: ${error.error.message}`;
        this.loggingService.error(errorMessage);

      } else {
        // Server-side error
        this.httpServerSideErrorOccurredSubject$.next(error);
        errorMessage = `Server Error: ${error.status}\nMessage: ${error.message}`;
        handled = this.handleServerError(error);
        this.loggingService.error(errorMessage);
      }
    } else {
      // something else happenned
      errorMessage = `Unexpected Error: ${error}`;
      this.loggingService.error(errorMessage);
    }
    return handled;
  }

  handleServerError(error: HttpErrorResponse): boolean {
    switch (error.status) {
      case HttpStatusCode.BadRequest:
        // Bad Request
        break;
      case HttpStatusCode.Unauthorized:
        // Unauthorized Request
        break;
      case HttpStatusCode.Forbidden:
        // Forbidden Request
        break;
      case HttpStatusCode.NotFound:
        // Not Found
        break;
      case HttpStatusCode.MethodNotAllowed:
        // Method not allowed
        break;
      case HttpStatusCode.RequestTimeout:
        // Request Timeout
        break;
      case HttpStatusCode.Conflict:
        // Conflict
        break;
      case HttpStatusCode.UnprocessableEntity:
        // Unprocessable entity
        break;
      case HttpStatusCode.InternalServerError: // Internal server error
      case HttpStatusCode.BadGateway: // Bad Gateway
        break;
      case HttpStatusCode.ServiceUnavailable:
        // Service Unavailable
        break;
      case HttpStatusCode.GatewayTimeout:
        // Gateway Timeout
        break;
    }
    return false;
  }

}
