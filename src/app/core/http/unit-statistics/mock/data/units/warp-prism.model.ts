import { HttpUnitStatistic } from '@core/http/unit-statistics/model/unit-statistic.model';

export const WARP_PRISM: HttpUnitStatistic = {
  race: 'Protoss',
  name: 'warp-prism',
  supply: 2,
  minerals: 250,
  gass: 0,
  size: 1.75,
  cargo: null,
  armor: {
    base: 0,
    upgradeLevelFactor: 1
  },
  health: 80,
  plasmaShield: 100,
  attributes: ['Armored', 'Mechanical', 'Psionic'],
  groundAttack: null,
  airAttack: null,
  bonusAttack: null,
  dps: null,
  bonusDps: null,
  attackMod: null,
  cooldown: null,
  speed: 3.94,
  range: 3,
  sight: 9
};
