import type { ImageSource } from 'expo-image';

export type BuddyId = 'breeze-buddy' | 'comet-scout' | 'glow-puff';

export type Buddy = {
  id: BuddyId;
  name: string;
  ageRange: string;
  image: ImageSource;
};
