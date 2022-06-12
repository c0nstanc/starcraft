// import { SimplePageSpinnerService } from '@hd360-vacui-blue/hd360-loaders-lib/spinners';
import { Observable } from 'rxjs';
import { HttpRequestOptions } from '../model/http-request-options.model';


export abstract class HttpBase {

  constructor(
    // private simplePageSpinnerService: SimplePageSpinnerService
  ) { }

  // TODO - implement spinner is some ui library.
  protected request<T>(
    obs$: Observable<T>,
    httpRequestOptions: HttpRequestOptions = new HttpRequestOptions()): Observable<T> {
    // return httpRequestOptions.showLoader ? this.simplePageSpinnerService.loadingOnUntilComplete(obs$) : obs$;
    return obs$;
  }
}
