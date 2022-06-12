import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceInAppModuleGuard } from '@c0nstanc/foundation-lib/guards';
import { HttpErrorHandlingService, HttpErrorInterceptor } from '@c0nstanc/foundation-lib/http-utils';
import { NavigationModule, NAVIGATION_LOGGING_SERVICE } from '@c0nstanc/foundation-lib/navigation';
import { DefaultCurrencyCodeProvider, MatDateLocaleProvider, ProvidersModule } from '@c0nstanc/foundation-lib/providers';
import { environment } from '@env';
import { IModuleTranslationOptions, ModuleTranslateLoader } from '@larscom/ngx-translate-module-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoggerModule } from 'ngx-logger';
import { GlobalErrorHandlingService } from './error/global.error-handling.service';
import { LoggingService } from './logging/logging.service';


const moduleHttpLoaderFactory = (http: HttpClient) => {
  const baseTranslateUrl = './assets/i18n';
  const options: IModuleTranslationOptions = {
    modules: [
      { baseTranslateUrl },
      { moduleName: 'footer', baseTranslateUrl },
    ],
    lowercaseNamespace: true,
  };
  return new ModuleTranslateLoader(http, options);
};


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: environment.defaultLanguage,
      loader: {
        provide: TranslateLoader,
        useFactory: moduleHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    LoggerModule.forRoot({
      serverLoggingUrl: environment.serverLoggingUrl,
      serverLogLevel: environment.serverLogLevel,
      level: environment.logLevel,
      disableConsoleLogging: environment.disableConsoleLogging
    }),
    ProvidersModule,
    NavigationModule,
    ScrollingModule,
  ],
  providers: [
    {
      provide: HttpErrorHandlingService,
      useExisting: GlobalErrorHandlingService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    { provide: NAVIGATION_LOGGING_SERVICE, useExisting: LoggingService },
    DefaultCurrencyCodeProvider,
    MatDateLocaleProvider
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceInAppModuleGuard {
  constructor(@Optional() @SkipSelf() targetModule: CoreModule) {
    super(targetModule);
  }
}
