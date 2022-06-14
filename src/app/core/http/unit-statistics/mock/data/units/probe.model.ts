import { HttpUnitStatistic } from '../../../model/unit-statistic.model';

export const PROBE: HttpUnitStatistic = {
  race: 'Protoss',
  name: 'Probe',
  supply: 1,
  minerals: 50,
  gass: 0,
  size: 0.75,
  cargo: 1,
  armor: {
    base: 0,
    upgradeLevelFactor: 1
  },
  health: 20,
  plasmaShield: 20,
  attributes: ['Light', 'Mechanical'],
  groundAttack: {
    base: 5,
    upgradeLevelFactor: 0
  },
  airAttack: null,
  bonusAttack: null,
  dps: {
    ground: {
      base: 4.7,
      upgradeLevelFactor: 0
    }
  },
  bonusDps: null,
  attackMod: null,
  cooldown: 1.07,
  speed: 3.94,
  range: 'Melee',
  sight: 8
};
