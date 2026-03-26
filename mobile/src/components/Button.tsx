import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  View
} from 'react-react-native';
// React Native doesn't have linear gradient built-in directly in base, Expo provides expo-linear-gradient
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';
import { layout, spacing, typography } from '../theme/theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  onPress: () => void;
  title: string;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onPress,
  title,
  loading = false,
  disabled = false,
  style,
  textStyle,
}) => {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isTertiary = variant === 'tertiary';

  const baseContainerStyle = [
    styles.container,
    isSecondary && styles.secondaryContainer,
    isTertiary && styles.tertiaryContainer,
    disabled && styles.disabledContainer,
    style,
  ];

  const content = (
    <View style={styles.content}>
      {loading ? (
        <ActivityIndicator color={isPrimary ? colors.onPrimary : colors.primary} />
      ) : (
        <Text
          style={[
            styles.text,
            isSecondary && styles.secondaryText,
            isTertiary && styles.tertiaryText,
            disabled && styles.disabledText,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </View>
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      style={isPrimary ? undefined : baseContainerStyle}
    >
      {isPrimary ? (
        <LinearGradient
          colors={[colors.primary, colors.primaryContainer]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0.26 }} // Approx 15° angle
          style={[baseContainerStyle, styles.primaryGradient]}
        >
          {content}
        </LinearGradient>
      ) : (
        content
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.micro[3],
    paddingHorizontal: spacing.base[6],
    borderRadius: layout.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryGradient: {
    // primary doesn't need extra styles here as it's defined in the LinearGradient
  },
  secondaryContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(193, 198, 213, 0.15)', // Ghost border
  },
  tertiaryContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: spacing.micro[1],
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.onPrimary,
    fontSize: typography.sizes.bodyMd,
    fontWeight: '600',
  },
  secondaryText: {
    color: colors.primary,
  },
  tertiaryText: {
    color: colors.onSurface,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  disabledContainer: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.8,
  },
});
