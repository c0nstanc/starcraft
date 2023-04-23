export interface HttpPlayerProfile {
  regionId: number;
  realmId: number;
  profileId: number;
  name: string;
  discriminator: number;
  avatar: string | null | undefined;
}
