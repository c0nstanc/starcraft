import { HttpUnitStatistic } from '@core/http/unit-statistics/model/unit-statistic.model';

export const STALKER: HttpUnitStatistic = {
  race: 'Protoss',
  name: 'Stalker',
  supply: 2,
  minerals: 125,
  gass: 50,
  size: 1.25,
  cargo: 2,
  armor: {
    base: 1,
    upgradeLevelFactor: 1
  },
  health: 80,
  plasmaShield: 40,
  attributes: ['Armored', 'Mechanical'],
  groundAttack: {
    base: 13,
    upgradeLevelFactor: 1,
    multiplier: 0
  },
  airAttack: {
    base: 13,
    upgradeLevelFactor: 1,
    multiplier: 0
  },
  bonusAttack: {
    armored: {
      base: 5,
      upgradeLevelFactor: 1
    }
  },
  dps: {
    ground: {
      base: 9.7,
      upgradeLevelFactor: 0.75
    },
    air: {
      base: 9.7,
      upgradeLevelFactor: 0.75
    }
  },
  bonusDps: {
    armored: {
      base: 3.7,
      upgradeLevelFactor: 0.75
    }
  },
  attackMod: ['Projectile'],
  cooldown: 1.34,
  speed: 4.13,
  range: 6,
  sight: 10
};
