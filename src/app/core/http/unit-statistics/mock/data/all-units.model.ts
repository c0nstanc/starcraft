import { HttpUnitStatistic } from '../../model/unit-statistic.model';
import { ADEPT } from './units/adept.model';
import { ARCHON } from './units/archon.model';
import { DARK_TEMPLAR } from './units/dark-templar.model';
import { HIGH_TEMPLAR } from './units/high-templar.model';
import { OBSERVER } from './units/observer.model';
import { PROBE } from './units/probe.model';
import { SENTRY } from './units/sentry.model';
import { STALKER } from './units/stalker.model';
import { ZEALOT } from './units/zealot.model';

export const units: HttpUnitStatistic[] = [
  PROBE,
  ZEALOT,
  SENTRY,
  STALKER,
  ADEPT,
  HIGH_TEMPLAR,
  DARK_TEMPLAR,
  ARCHON,
  OBSERVER
];
