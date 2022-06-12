import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private logger: NGXLogger) {
  }

  public trace(message: unknown): void {
    this.logger.trace(message);
  }

  public debug(message: unknown): void {
    this.logger.debug(message);
  }

  public info(message: unknown): void {
    this.logger.info(message);
  }

  public log(message: unknown): void {
    this.logger.log(message);
  }

  public warn(message: unknown): void {
    this.logger.warn(message);
  }

  public error(message: unknown): void {
    this.logger.error(message);
  }

  public fatal(message: unknown): void {
    this.logger.fatal(message);
  }
}
