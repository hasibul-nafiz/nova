import type { Buddy } from '@/types/buddy';

export const BUDDIES: readonly Buddy[] = [
  {
    id: 'breeze-buddy',
    name: 'Breeze Buddy',
    ageRange: 'Age 5–7',
    image: require('../../assets/images/buddies/breeze-buddy.png'),
  },
  {
    id: 'comet-scout',
    name: 'Comet Scout',
    ageRange: 'Age 8–10',
    image: require('../../assets/images/buddies/comet-scout.png'),
  },
  {
    id: 'glow-puff',
    name: 'Glow Puff',
    ageRange: 'Age 11–12',
    image: require('../../assets/images/buddies/glow-puff.png'),
  },
];
