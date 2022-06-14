import { HttpUnitStatistic } from '@core/http/unit-statistics/model/unit-statistic.model';

export const ARCHON: HttpUnitStatistic = {
  race: 'Protoss',
  name: 'Archon',
  supply: 4,
  minerals: 0,
  gass: 0,
  size: 2,
  cargo: 4,
  armor: {
    base: 0,
    upgradeLevelFactor: 1
  },
  health: 10,
  plasmaShield: 350,
  attributes: ['Psionic', 'Massive'],
  groundAttack: {
    base: 25,
    upgradeLevelFactor: 3,
    multiplier: 0
  },
  airAttack: {
    base: 25,
    upgradeLevelFactor: 3,
    multiplier: 0
  },
  bonusAttack: {
    biological: {
      base: 10,
      upgradeLevelFactor: 1
    }
  },
  dps: {
    ground: {
      base: 20,
      upgradeLevelFactor: 2.4
    },
    air: {
      base: 20,
      upgradeLevelFactor: 2.4
    }
  },
  bonusDps: {
    biological: {
      base: 8,
      upgradeLevelFactor: 0.8
    }
  },
  attackMod: ['Splash'],
  cooldown: 1.25,
  speed: 3.94,
  range: 3,
  sight: 9
};
