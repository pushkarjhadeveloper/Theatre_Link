import React from 'react';
import { View, Text, StyleSheet, SectionList, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing, typography, layout } from '../../theme/theme';

interface Notification {
  id: string;
  user: string;
  action: string;
  detail?: string;
}

interface NotificationSection {
  title: string;
  data: Notification[];
}

const NOTIFICATIONS_DATA: NotificationSection[] = [
  {
    title: 'TODAY',
    data: [
      { id: '1', user: 'Tech D', action: 'sent a connection request' },
      { id: '2', user: 'Application to', action: "'Contemporary Play' shortlisted" },
      { id: '3', user: 'Director A', action: "posted a casting for 'ROMEO & JULIET'" },
    ]
  },
  {
    title: 'THIS WEEK',
    data: [
      { id: '4', user: 'Actor A', action: 'commented on your post', detail: '"Incredible performance last night! The depth you brought to..."' },
      { id: '5', user: 'Producer B', action: 'liked your post' },
    ]
  }
];

const NotificationItem = ({ item }: { item: Notification }) => {
  return (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>
        <Text style={styles.userText}>{item.user} </Text>
        {item.action}
      </Text>
      {item.detail && <Text style={styles.detailText}>{item.detail}</Text>}
    </View>
  );
};

export const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <SectionList
        sections={NOTIFICATIONS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        contentContainerStyle={styles.listContainer}
        stickySectionHeadersEnabled={false}
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
    paddingBottom: spacing.macro[8],
  },
  sectionHeader: {
    fontSize: typography.sizes.labelSm,
    fontFamily: typography.fonts.interSemiBold,
    color: colors.primary,
    paddingHorizontal: spacing.base[6],
    paddingTop: spacing.base[6],
    paddingBottom: spacing.micro[3],
    letterSpacing: typography.letterSpacing.labelSm,
  },
  notificationItem: {
    backgroundColor: colors.surfaceContainerLowest,
    padding: spacing.base[5],
    marginHorizontal: spacing.base[6],
    marginBottom: spacing.micro[3],
    borderRadius: layout.borderRadius.md,
    borderWidth: 1,
    borderColor: colors.ghostBorder,
  },
  notificationText: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurfaceVariant,
  },
  userText: {
    fontFamily: typography.fonts.interSemiBold,
    color: colors.onSurface,
  },
  detailText: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurfaceVariant,
    marginTop: spacing.micro[2],
    fontStyle: 'italic',
  },
});
