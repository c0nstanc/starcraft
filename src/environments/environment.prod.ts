import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  defaultLanguage: 'el',
  supportedLanguages: ['el', 'en'],
  serverLoggingUrl: undefined,
  serverLogLevel: NgxLoggerLevel.ERROR,
  disableConsoleLogging: true,
  logLevel: NgxLoggerLevel.INFO,
  assetsBaseUrl: '',
  apiBaseUrl: '/api/some-url',
  mocking: {
    unitStatistics: true
  }
};
