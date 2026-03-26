import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { spacing, layout, typography } from '../theme/theme';

interface PortfolioCardProps {
  artistName: string;
  role: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  artistName,
  role,
  onPress,
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[
        styles.card,
        isHovered && styles.cardHovered,
        style
      ]}
    >
      <Text style={styles.artistName}>{artistName}</Text>
      <View style={styles.roleContainer}>
        <Text style={styles.roleText}>{role}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceContainerLowest,
    padding: spacing.base[4],
    borderRadius: layout.borderRadius.md,
    // Provide ambient tonal lift via standard shadows for iOS/Android if not natively hovered
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.08,
    shadowRadius: 32,
    elevation: 2,
    // "Ghost Border" fallback
    borderWidth: 1,
    borderColor: colors.ghostBorder,
  },
  cardHovered: {
    backgroundColor: colors.surfaceContainerHigh,
  },
  artistName: {
    fontSize: typography.sizes.titleMd,
    fontWeight: '600',
    color: colors.onSurface,
    marginBottom: spacing.micro[1],
  },
  roleContainer: {
    // Structural padding and no dividers
  },
  roleText: {
    fontSize: typography.sizes.bodyMd,
    color: colors.onSurfaceVariant,
  },
});
