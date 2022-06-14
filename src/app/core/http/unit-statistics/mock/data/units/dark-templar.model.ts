import { HttpUnitStatistic } from '@core/http/unit-statistics/model/unit-statistic.model';

export const DARK_TEMPLAR: HttpUnitStatistic = {
  race: 'Protoss',
  name: 'Dark-Templar',
  supply: 2,
  minerals: 125,
  gass: 125,
  size: 0.75,
  cargo: 2,
  armor: {
    base: 1,
    upgradeLevelFactor: 1
  },
  health: 40,
  plasmaShield: 80,
  attributes: ['Light', 'Biological', 'Psionic'],
  groundAttack: {
    base: 45,
    upgradeLevelFactor: 5,
    multiplier: 0
  },
  airAttack: null,
  bonusAttack: null,
  dps: {
    ground: {
      base: 37.2,
      upgradeLevelFactor: 4.13
    }
  },
  bonusDps: null,
  attackMod: null,
  cooldown: 1.21,
  speed: 3.94,
  range: 'Melee',
  sight: 8
};
