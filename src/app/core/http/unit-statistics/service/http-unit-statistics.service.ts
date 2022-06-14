import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestOptions, HTTP_UNIT_STATISTICS } from '@core/http/base/model';
import { HttpBase } from '@core/http/base/service/http-base.abstract';
import { environment } from '@env';
import { Observable, of } from 'rxjs';
import { MOCK_UNIT_STATISTICS } from '../mock/data';
import { HttpUnitStatistic } from '../model/unit-statistic.model';

@Injectable({
  providedIn: 'root'
})
export class HttpGarageProviderService extends HttpBase {

  constructor(
    private http: HttpClient,
    // simplePageSpinnerService: SimplePageSpinnerService
  ) {
    super(
      // simplePageSpinnerService
    );
  }

  getUnitStatistics(httpRequestOptions?: HttpRequestOptions): Observable<HttpUnitStatistic[]> {

    const getUnitStatisticsRequest$ = this.http.get<HttpUnitStatistic[]>(HTTP_UNIT_STATISTICS());

    if (environment.mocking.unitStatistics) {
      return of(MOCK_UNIT_STATISTICS.data as HttpUnitStatistic[]);

    } else {
      return this.request(getUnitStatisticsRequest$, httpRequestOptions);
    }


  }
}
