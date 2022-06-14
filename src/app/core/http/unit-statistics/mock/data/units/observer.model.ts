import { HttpUnitStatistic } from '@core/http/unit-statistics/model/unit-statistic.model';

export const OBSERVER: HttpUnitStatistic = {
  race: 'Protoss',
  name: 'Obserrver',
  supply: 1,
  minerals: 25,
  gass: 75,
  size: 1,
  cargo: null,
  armor: {
    base: 0,
    upgradeLevelFactor: 1
  },
  health: 40,
  plasmaShield: 20,
  attributes: ['Light', 'Mechanical'],
  groundAttack: null,
  airAttack: null,
  bonusAttack: null,
  dps: null,
  bonusDps: null,
  attackMod: null,
  cooldown: null,
  speed: 2.63,
  range: null,
  sight: 11
};
