import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing, typography, layout } from '../../theme/theme';

interface Post {
  id: string;
  author: string;
  role: string;
  timeAgo: string;
  title?: string;
  content: string;
}

const FEED_DATA: Post[] = [
  {
    id: '1',
    author: 'The Royal Shakespeare Co.',
    role: 'Direct Casting',
    timeAgo: '2h ago',
    title: 'Lead Role: Hamlet (Modern Reimagining)',
    content: 'Seeking a dynamic performer for a bold new production. Performance involves physical theatre and multi-media interaction. Touring Europe Fall 2024.',
  },
  {
    id: '2',
    author: 'Sarah Chen',
    role: 'Scenic Designer',
    timeAgo: '5h ago',
    content: 'Just wrapped up the technical rehearsals for "Midsummer Night\'s Dream". The lighting team absolutely killed it with the forest atmosphere! 🌲✨',
  },
  {
    id: '3',
    author: 'Local Stage Hub',
    role: 'Community',
    timeAgo: '1d ago',
    title: 'Build Your Crew',
    content: 'Connect with 50+ local designers and stage managers looking for work.',
  }
];

const FeedCard = ({ post }: { post: Post }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.author}>{post.author}</Text>
          <Text style={styles.meta}>{post.role} • {post.timeAgo}</Text>
        </View>
      </View>
      {post.title && <Text style={styles.cardTitle}>{post.title}</Text>}
      <Text style={styles.cardContent}>{post.content}</Text>
    </View>
  );
};

export const HomeFeedScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TheatreLink</Text>
      </View>
      <FlatList
        data={FEED_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedCard post={item} />}
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
    paddingVertical: spacing.base[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.surfaceContainerHighest,
  },
  headerTitle: {
    fontSize: typography.sizes.headlineSm,
    fontFamily: typography.fonts.interBold,
    color: colors.primary,
  },
  listContainer: {
    padding: spacing.base[4],
  },
  card: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: layout.borderRadius.md,
    padding: spacing.base[5],
    marginBottom: spacing.base[4],
    // The Design System explicitly demands tonal separation, not heavy borders
    borderWidth: 1,
    borderColor: colors.ghostBorder,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.micro[3],
  },
  author: {
    fontSize: typography.sizes.titleMd,
    fontFamily: typography.fonts.interSemiBold,
    color: colors.onSurface,
  },
  meta: {
    fontSize: typography.sizes.labelSm,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurfaceVariant,
    letterSpacing: typography.letterSpacing.labelSm,
    textTransform: 'uppercase',
    marginTop: 2,
  },
  cardTitle: {
    fontSize: typography.sizes.headlineSm,
    fontFamily: typography.fonts.interBold,
    color: colors.onSurface,
    marginBottom: spacing.micro[2],
  },
  cardContent: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurfaceVariant,
    lineHeight: 22,
  },
});
