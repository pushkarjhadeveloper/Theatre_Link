import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing, typography, layout } from '../../theme/theme';
import { Button } from '../../components/Button';

export const CastingDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>ROMEO & JULIET</Text>
          <Text style={styles.subtitle}>Lead Casting</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>45 APPLICANTS</Text>
          </View>
        </View>

        {/* Action Button */}
        <Button 
          title="Apply for Role" 
          onPress={() => {}} 
          style={styles.applyButton} 
        />

        {/* Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.bodyText}>
            We are seeking passionate talent for an exciting new production of Romeo and Juliet. 
            This modern reimagining focuses on the intense psychological landscape of Verona's youth. 
            Directed by Marcus Thorne, this production aims to blend classical prose with contemporary physical theatre.
            We encourage actors from diverse backgrounds to audition for this groundbreaking interpretation.
          </Text>
        </View>

        {/* Roles Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Roles Needed</Text>
          
          <View style={styles.roleCard}>
            <Text style={styles.roleTitle}>Lead Actor (Romeo)</Text>
            <Text style={styles.roleType}>Lead Role</Text>
          </View>

          <View style={styles.roleCard}>
            <Text style={styles.roleTitle}>Lead Actress (Juliet)</Text>
            <Text style={styles.roleType}>Lead Role</Text>
          </View>
          
          <View style={styles.roleCard}>
            <Text style={styles.roleTitle}>Chorus / Supporting</Text>
            <Text style={styles.roleType}>6 Positions Open</Text>
            <Text style={styles.roleDesc}>
              Requires strong movement skills and ensemble experience. Freshers welcome with exceptional screen/stage presence.
            </Text>
          </View>
        </View>

        {/* Key Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Details</Text>
          <View style={styles.detailsBox}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Audition Date</Text>
              <Text style={styles.detailValue}>April 10, 2026</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Time Slot</Text>
              <Text style={styles.detailValue}>6:00 PM onwards</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Rehearsal Schedule</Text>
              <Text style={styles.detailValue}>Mon, Wed, Sat (Evenings)</Text>
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
    marginBottom: spacing.base[6],
  },
  title: {
    fontSize: typography.sizes.displayLg,
    fontFamily: typography.fonts.interBold,
    color: colors.onSurface,
    lineHeight: 64,
  },
  subtitle: {
    fontSize: typography.sizes.headlineSm,
    fontFamily: typography.fonts.interMedium,
    color: colors.primary,
    marginTop: spacing.micro[2],
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primaryContainer,
    paddingHorizontal: spacing.base[4],
    paddingVertical: spacing.micro[2],
    borderRadius: layout.borderRadius.full,
    marginTop: spacing.base[4],
  },
  badgeText: {
    fontSize: typography.sizes.labelSm,
    fontFamily: typography.fonts.interSemiBold,
    color: colors.onPrimaryContainer,
    letterSpacing: typography.letterSpacing.labelSm,
  },
  applyButton: {
    marginBottom: spacing.macro[12],
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
  roleCard: {
    backgroundColor: colors.surfaceContainerLowest,
    padding: spacing.base[5],
    borderRadius: layout.borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    marginBottom: spacing.base[4],
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  roleTitle: {
    fontSize: typography.sizes.titleMd,
    fontFamily: typography.fonts.interBold,
    color: colors.onSurface,
    marginBottom: spacing.micro[1],
  },
  roleType: {
    fontSize: typography.sizes.labelSm,
    fontFamily: typography.fonts.interSemiBold,
    color: colors.primary,
    textTransform: 'uppercase',
  },
  roleDesc: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurfaceVariant,
    marginTop: spacing.base[4],
    lineHeight: 20,
  },
  detailsBox: {
    backgroundColor: colors.surfaceContainerLow,
    padding: spacing.base[5],
    borderRadius: layout.borderRadius.md,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.micro[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  detailLabel: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interMedium,
    color: colors.onSurfaceVariant,
  },
  detailValue: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interSemiBold,
    color: colors.onSurface,
  },
});
