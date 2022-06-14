import { HttpUnitStatistic } from '@core/http/unit-statistics/model/unit-statistic.model';

export const ZEALOT: HttpUnitStatistic = {
  race: 'Protoss',
  name: 'Zealot',
  supply: 2,
  minerals: 100,
  gass: 0,
  size: 1,
  cargo: 2,
  armor: {
    base: 1,
    upgradeLevelFactor: 1
  },
  health: 100,
  plasmaShield: 50,
  attributes: ['Light', 'Biological'],
  groundAttack: {
    base: 8,
    upgradeLevelFactor: 1,
    multiplier: 2
  },
  airAttack: null,
  bonusAttack: null,
  dps: {
    ground: {
      base: 18.6,
      upgradeLevelFactor: 2.33
    }
  },
  bonusDps: null,
  attackMod: null,
  cooldown: 0.86,
  speed: 3.15,
  range: 'Melee',
  sight: 9
};
