import { Page } from '../../model/page.enum';

export class CanProceed {
  constructor(
    public readonly proceed: boolean,
    public readonly redirectTo?: Page) {
  }


  static proceed(): CanProceed {
    return new CanProceed(true);
  }

  static redirectToStart(): CanProceed {
    return new CanProceed(false, Page.DAMAGE_CALCULATOR);
  }


}
