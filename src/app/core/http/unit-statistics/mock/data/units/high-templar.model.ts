import { HttpUnitStatistic } from '@core/http/unit-statistics/model/unit-statistic.model';

export const HIGH_TEMPLAR: HttpUnitStatistic = {
  race: 'Protoss',
  name: 'High-Templar',
  supply: 2,
  minerals: 50,
  gass: 150,
  size: 0.75,
  cargo: 2,
  armor: {
    base: 0,
    upgradeLevelFactor: 1
  },
  health: 40,
  plasmaShield: 40,
  attributes: ['Light', 'Biological', 'Psionic'],
  groundAttack: {
    base: 4,
    upgradeLevelFactor: 1,
    multiplier: 0
  },
  airAttack: null,
  bonusAttack: null,
  dps: {
    ground: {
      base: 3.2,
      upgradeLevelFactor: 0.8
    }
  },
  bonusDps: null,
  attackMod: null,
  cooldown: 1.25,
  speed: 2.62,
  range: 6,
  sight: 10
};
