import Markdown from '@ronradtke/react-native-markdown-display';
import type {AppTheme} from '@shared/hooks';
import {useAppTheme} from '@shared/hooks';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import type {MarkDownProps} from './MarkDown.types';

export const MarkDown = ({content}: MarkDownProps) => {
  /** Hooks */
  const {colors} = useAppTheme();
  if (!content) return null;
  return <Markdown style={styles({colors})}>{content}</Markdown>;
};

export const styles = (props: {colors: AppTheme['colors']}) =>
  StyleSheet.create({
    text: {
      color: props.colors.onSurface,
    },
  });
