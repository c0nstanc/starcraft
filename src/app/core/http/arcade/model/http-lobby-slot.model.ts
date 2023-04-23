import { HttpJoinLobbyInfo } from './http-join-lobby-info.model';
import { HttpPlayerProfile } from './http-player-profile.model';

export interface HttpLobbySlot {
  slotNumber: number;
  team: number;
  kind: string;
  name: string | null;
  profile: HttpPlayerProfile | null;
  joinInfo: HttpJoinLobbyInfo | null;
}
