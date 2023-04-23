import { HttpJoinHistoryRecord } from './http-join-history-record.model';
import { HttpLobbySlot } from './http-lobby-slot.model';

export class HttpLobby {
  regionId: number;
  bnetBucketId: number;
  bnetRecordId: number;
  createdAt: string;
  closedAt: string | null;
  snapshotUpdatedAt: string;
  slotsUpdatedAt: string;
  status: string;
  mapBnetId: number;
  extModBnetId: string | null;
  multiModBnetId: null;
  mapVariantIndex: number;
  mapVariantMode: string;
  lobbyTitle: string;
  hostName: string;
  slotsHumansTotal: number;
  slotsHumansTaken: number;
  slots: HttpLobbySlot[];
  joinHistory: HttpJoinHistoryRecord[];
}
