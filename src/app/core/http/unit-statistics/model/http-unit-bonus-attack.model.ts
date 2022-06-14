import { HttpUnitAttack } from './http-unit-attack.model';

export interface HttpUnitBonusAttack {
  light: HttpUnitAttack;
  lightAir: HttpUnitAttack;
  armored: HttpUnitAttack;
  biological: HttpUnitAttack;
  massiveAir: HttpUnitAttack;
  massive: HttpUnitAttack;
  mechanical: HttpUnitAttack;
  shields: HttpUnitAttack;
}
