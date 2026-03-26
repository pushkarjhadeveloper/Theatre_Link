import React, { useState } from 'react';
import { View, TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps, Animated } from 'react-native';
import { colors } from '../theme/colors';
import { spacing, typography } from '../theme/theme';

interface TextInputProps extends RNTextInputProps { }

export const TextInput: React.FC<TextInputProps> = ({
  style,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedWidth = React.useRef(new Animated.Value(0)).current;

  const handleFocus = (e: any) => {
    setIsFocused(true);
    Animated.timing(animatedWidth, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false, // width cannot use native driver
    }).start();
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    Animated.timing(animatedWidth, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onBlur?.(e);
  };

  const activeBorderWidth = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%']
  });

  return (
    <View style={[styles.container, style]}>
      <RNTextInput
        style={styles.input}
        placeholderTextColor={colors.onSurfaceVariant}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <View style={styles.borderContainer}>
        <Animated.View style={[styles.activeBorder, { width: activeBorderWidth }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surfaceContainerHighest,
    borderRadius: 4,
    overflow: 'hidden',
  },
  input: {
    paddingHorizontal: spacing.base[4],
    paddingVertical: spacing.micro[3],
    fontSize: typography.sizes.bodyMd,
    color: colors.onSurface,
    minHeight: 48,
  },
  borderContainer: {
    height: 2,
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  activeBorder: {
    height: 2,
    backgroundColor: colors.primary,
  }
});
