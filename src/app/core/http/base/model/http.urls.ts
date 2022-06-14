import { environment } from '@env';

// example
export const HTTP_UNIT_STATISTICS = (version: string = 'v1') => `${environment.apiBaseUrl}/${version}/unit-statistics`;
