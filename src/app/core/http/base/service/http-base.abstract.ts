import { SimplePageSpinnerService } from '@c0nstanc/loaders-lib/spinners';
import { Observable } from 'rxjs';
import { HttpRequestOptions } from '../model/http-request-options.model';


export abstract class HttpBase {

  constructor(
    private simplePageSpinnerService: SimplePageSpinnerService
  ) { }

  protected request<T>(
    obs$: Observable<T>,
    httpRequestOptions: HttpRequestOptions = new HttpRequestOptions()): Observable<T> {
    return httpRequestOptions.showLoader ? this.simplePageSpinnerService.loadingOnUntilComplete(obs$) : obs$;
  }
}
