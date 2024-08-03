import { HttpClient, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceInAppModuleGuard } from '@c0nstanc/foundation-lib/guards';
import {
  HttpErrorHandlingService,
  HttpErrorInterceptor,
} from '@c0nstanc/foundation-lib/http-utils';
import {
  NavigationModule,
  NAVIGATION_LOGGING_SERVICE,
} from '@c0nstanc/foundation-lib/navigation';
import { environment } from '@env';
import {
  IModuleTranslationOptions,
  ModuleTranslateLoader,
} from '@larscom/ngx-translate-module-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoggerModule } from 'ngx-logger';
import { GlobalErrorHandlingService } from './error/global.error-handling.service';
import { LoggingService } from './logging/logging.service';
import { SpinnersModule } from '@c0nstanc/loaders-lib/spinners';

const moduleHttpLoaderFactory = (http: HttpClient) => {
  const baseTranslateUrl = './assets/i18n';
  const options: IModuleTranslationOptions = {
    modules: [{ baseTranslateUrl }, { moduleName: 'footer', baseTranslateUrl }],
    lowercaseNamespace: true,
  };
  return new ModuleTranslateLoader(http, options);
};

@NgModule({ declarations: [], imports: [TranslateModule.forRoot({
            defaultLanguage: environment.defaultLanguage,
            loader: {
                provide: TranslateLoader,
                useFactory: moduleHttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        LoggerModule.forRoot({
            serverLoggingUrl: environment.serverLoggingUrl,
            serverLogLevel: environment.serverLogLevel,
            level: environment.logLevel,
            disableConsoleLogging: environment.disableConsoleLogging,
        }),
        // ProvidersModule,
        NavigationModule], providers: [
        {
            provide: HttpErrorHandlingService,
            useExisting: GlobalErrorHandlingService,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
        { provide: NAVIGATION_LOGGING_SERVICE, useExisting: LoggingService },
        // DefaultCurrencyCodeProvider,
        // MatDateLocaleProvider
        SpinnersModule,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class CoreModule extends EnsureModuleLoadedOnceInAppModuleGuard {
  constructor(@Optional() @SkipSelf() targetModule: CoreModule) {
    super(targetModule);
  }
}
