import { HttpUnitStatistic } from '@core/http/unit-statistics/model/unit-statistic.model';

export const ADEPT: HttpUnitStatistic = {
  race: 'Protoss',
  name: 'Adept',
  supply: 2,
  minerals: 100,
  gass: 25,
  size: 1,
  cargo: 2,
  armor: {
    base: 1,
    upgradeLevelFactor: 1
  },
  health: 70,
  plasmaShield: 70,
  attributes: ['Light', 'Biological'],
  groundAttack: {
    base: 10,
    upgradeLevelFactor: 1,
    multiplier: 0
  },
  airAttack: null,
  bonusAttack: {
    light: {
      base: 12,
      upgradeLevelFactor: 1
    }
  },
  dps: {
    ground: {
      base: 6.2,
      upgradeLevelFactor: 0.62
    }
  },
  bonusDps: {
    light: {
      base: 7.45,
      upgradeLevelFactor: 0.62
    }
  },
  attackMod: null,
  cooldown: 1.61,
  speed: 3.5,
  range: 4,
  sight: 9
};
