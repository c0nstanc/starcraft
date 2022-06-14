import {
  HttpUnitArmor, HttpUnitRace,
  HttpUnitAttribute, HttpUnitAttack,
  HttpUnitBonusAttack, HttpUnitDps,
  HttpUnitAttackMod, HttpUnitAttackRange
} from '.';


export interface HttpUnitStatistic {

  name: string;
  race: HttpUnitRace;
  supply: number;
  minerals: number;
  gass: number;
  size: number;
  cargo: number | null;
  armor: HttpUnitArmor;
  health: number;
  plasmaShield: number;
  attributes: HttpUnitAttribute[];
  groundAttack: HttpUnitAttack | null;
  airAttack: HttpUnitAttack | null;
  bonusAttack: Partial<HttpUnitBonusAttack> | null;
  dps: Partial<HttpUnitDps> | null;
  bonusDps: Partial<HttpUnitBonusAttack> | null;
  attackMod: HttpUnitAttackMod[] | null;
  cooldown: number | null;
  speed: number;
  range: HttpUnitAttackRange | null;
  sight: number;
}
