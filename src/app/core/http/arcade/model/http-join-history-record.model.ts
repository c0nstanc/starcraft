import { HttpPlayerProfile } from './http-player-profile.model';

export interface HttpJoinHistoryRecord {
  joinedAt: string;
  "leftAt": string;
  profile: HttpPlayerProfile;
}
