import { atom } from 'recoil';

export const ecoPointsAtom = atom({
  key: 'ecoPointsAtom', // Unique ID for this atom.
  default: 0, // Initial eco-points value.
});
