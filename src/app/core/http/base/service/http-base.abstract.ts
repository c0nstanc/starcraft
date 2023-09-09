import { SimplePageSpinnerService } from '@c0nstanc/loaders-lib/spinners';
import { Observable } from 'rxjs';
import { HttpRequestOptions } from '../model/http-request-options.model';
import { inject } from '@angular/core';

export abstract class HttpBase {
  protected simplePageSpinnerService = inject(SimplePageSpinnerService);
  constructor() {}

  protected request<T>(
    obs$: Observable<T>,
    httpRequestOptions: HttpRequestOptions = new HttpRequestOptions()
  ): Observable<T> {
    return httpRequestOptions.showLoader
      ? this.simplePageSpinnerService.loadingOnUntilComplete(obs$)
      : obs$;
  }
}
