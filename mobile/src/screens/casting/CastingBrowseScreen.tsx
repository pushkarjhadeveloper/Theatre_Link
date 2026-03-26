import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/colors';
import { spacing, typography, layout } from '../../theme/theme';

interface CastingCall {
  id: string;
  title: string;
  company: string;
  location: string;
}

const CASTING_DATA: CastingCall[] = [
  {
    id: '1',
    title: 'ROMEO & JULIET',
    company: 'The Royal Shakespeare Company',
    location: 'London, UK',
  },
  {
    id: '2',
    title: 'LES MISÉRABLES',
    company: 'West End Revival',
    location: "Queen's Theatre",
  },
  {
    id: '3',
    title: 'THE GLASS ARCHIVE',
    company: 'Contemporary Works Lab',
    location: 'Brooklyn',
  }
];

const CastingCard = ({ item }: { item: CastingCall }) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable 
      onPress={() => navigation.navigate('CastingDetails')}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.company} • {item.location}</Text>
    </Pressable>
  );
};

export const CastingBrowseScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Casting Now</Text>
      </View>
      <FlatList
        data={CASTING_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CastingCard item={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  header: {
    paddingHorizontal: spacing.base[6],
    paddingVertical: spacing.macro[8],
  },
  headerTitle: {
    fontSize: typography.sizes.displayLg,
    fontFamily: typography.fonts.interBold,
    color: colors.onSurface,
  },
  listContainer: {
    paddingHorizontal: spacing.base[6],
    paddingBottom: spacing.macro[8],
  },
  card: {
    backgroundColor: colors.surfaceContainerLowest,
    padding: spacing.base[5],
    borderRadius: layout.borderRadius.md,
    marginBottom: spacing.base[4],
    borderWidth: 1,
    borderColor: colors.ghostBorder,
    // Soft ambient shadow
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
  },
  cardPressed: {
    backgroundColor: colors.surfaceContainerHigh,
  },
  cardTitle: {
    fontSize: typography.sizes.titleMd,
    fontFamily: typography.fonts.interSemiBold,
    color: colors.onSurface,
    marginBottom: spacing.micro[2],
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  cardSubtitle: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurfaceVariant,
  },
});
