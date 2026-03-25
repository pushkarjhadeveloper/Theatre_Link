import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing, typography, layout } from '../../theme/theme';
import { PortfolioCard } from '../../components/PortfolioCard';

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>Julian Thorne</Text>
          <Text style={styles.role}>Artistic Director & Scenographer</Text>
        </View>

        {/* Professional Narrative Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Narrative</Text>
          <Text style={styles.bodyText}>
            With over 12 years of experience in avant-garde stage design and creative direction,
            I specialize in transforming classical texts into immersive physical experiences.
            My work has been featured in the West End and at the Edinburgh Fringe,
            focusing on the intersection of light, architecture, and human movement.
            Passionate about mentoring the next generation of technicians.
          </Text>
        </View>

        {/* Production History Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Production History</Text>
          <View style={styles.cardContainer}>
            <View style={styles.historyCard}>
              <Text style={styles.cardTitle}>The Glass Menagerie</Text>
              <Text style={styles.cardRole}>Lead Scenographer — Royal National Theatre</Text>
              <Text style={styles.cardDesc}>
                Leading the visual design for a contemporary reimagining of the classic Tennessee Williams play, featuring a kinetic glass set.
              </Text>
            </View>

            <View style={styles.historyCard}>
              <Text style={styles.cardTitle}>Hamlet: Unbound</Text>
              <Text style={styles.cardRole}>Creative Director — Globe Theatre</Text>
              <Text style={styles.cardDesc}>
                Directed a site-specific immersive production that utilized augmented reality to enhance the ghost scenes of Elsinore.
              </Text>
            </View>

            <View style={styles.historyCard}>
              <Text style={styles.cardTitle}>Shadow & Light Festival</Text>
              <Text style={styles.cardRole}>Technical Consultant — Freelance</Text>
              <Text style={styles.cardDesc}>
                Advised on large-scale projections and light mapping for the annual experimental theatre showcase in London.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  container: {
    paddingHorizontal: spacing.base[6],
    paddingVertical: spacing.macro[8],
  },
  header: {
    marginBottom: spacing.macro[12],
  },
  name: {
    fontSize: typography.sizes.displayLg,
    fontFamily: typography.fonts.interBold,
    color: colors.onSurface,
    lineHeight: 64,
  },
  role: {
    fontSize: typography.sizes.titleMd,
    fontFamily: typography.fonts.interSemiBold,
    color: colors.primary,
    marginTop: spacing.micro[2],
  },
  section: {
    marginBottom: spacing.macro[12],
  },
  sectionTitle: {
    fontSize: typography.sizes.headlineSm,
    fontFamily: typography.fonts.interBold,
    color: colors.onSurface,
    marginBottom: spacing.base[4],
  },
  bodyText: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurfaceVariant,
    lineHeight: 24,
  },
  cardContainer: {
    gap: spacing.base[4],
  },
  historyCard: {
    backgroundColor: colors.surfaceContainerLowest,
    padding: spacing.base[5],
    borderRadius: layout.borderRadius.md,
    borderWidth: 1,
    borderColor: colors.ghostBorder,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  cardTitle: {
    fontSize: typography.sizes.titleMd,
    fontFamily: typography.fonts.interBold,
    color: colors.onSurface,
    marginBottom: spacing.micro[1],
  },
  cardRole: {
    fontSize: typography.sizes.labelSm,
    fontFamily: typography.fonts.interSemiBold,
    color: colors.primary,
    letterSpacing: typography.letterSpacing.labelSm,
    textTransform: 'uppercase',
    marginBottom: spacing.micro[3],
  },
  cardDesc: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurfaceVariant,
    lineHeight: 20,
  },
});
