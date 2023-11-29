import {Platform} from 'react-native';
import type {MD3Type} from 'react-native-paper/lib/typescript/src/types';

export const fontConfig = {
  default: {
    fontFamily: Platform.select({
      default: "'Lora', serif",
    }),
    fontWeight: '400',
    letterSpacing: 0,
    fontSize: 14,
    lineHeight: 20,
  },
} as const;
