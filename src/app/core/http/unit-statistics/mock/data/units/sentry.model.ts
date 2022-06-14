import { HttpUnitStatistic } from '@core/http/unit-statistics/model/unit-statistic.model';

export const SENTRY: HttpUnitStatistic = {
  race: 'Protoss',
  name: 'Sentry',
  supply: 2,
  minerals: 50,
  gass: 100,
  size: 1,
  cargo: 2,
  armor: {
    base: 1,
    upgradeLevelFactor: 1
  },
  health: 40,
  plasmaShield: 40,
  attributes: ['Light', 'Psionic', 'Mechanical'],
  groundAttack: {
    base: 6,
    upgradeLevelFactor: 1,
    multiplier: 0
  },
  airAttack: {
    base: 6,
    upgradeLevelFactor: 1,
    multiplier: 0
  },
  bonusAttack: null,
  dps: {
    ground: {
      base: 8.5,
      upgradeLevelFactor: 1.41
    }
  },
  bonusDps: null,
  attackMod: null,
  cooldown: 0.71,
  speed: 3.15,
  range: 5,
  sight: 10
};
