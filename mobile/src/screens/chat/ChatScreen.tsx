import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput as RNTextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing, typography, layout } from '../../theme/theme';

export const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Director B</Text>
          <Text style={styles.statusText}>Director B is typing...</Text>
        </View>

        <ScrollView contentContainerStyle={styles.chatContainer} showsVerticalScrollIndicator={false}>
          <Text style={styles.timestamp}>April 1 @ 3:00 PM</Text>

          <View style={[styles.messageBubble, styles.receivedMessage]}>
            <Text style={styles.messageText}>Can you come to audition?</Text>
          </View>

          <View style={[styles.messageBubble, styles.sentMessage]}>
            <Text style={[styles.messageText, styles.sentMessageText]}>
              Yes, definitely. Send me the details.
            </Text>
          </View>

          <View style={[styles.messageBubble, styles.receivedMessage]}>
            <Text style={styles.messageText}>
              Great! Here's the details: We're looking at Stage 4, 10:00 AM on Wednesday. Bring the updated headshots.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.inputArea}>
          <View style={styles.inputContainer}>
            <RNTextInput 
              style={styles.input} 
              placeholder="Type a message..." 
              placeholderTextColor={colors.onSurfaceVariant}
              multiline
            />
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  container: {
    flex: 1,
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
    color: colors.onSurface,
  },
  statusText: {
    fontSize: typography.sizes.labelSm,
    fontFamily: typography.fonts.interRegular,
    color: colors.primary,
    marginTop: spacing.micro[1],
  },
  chatContainer: {
    padding: spacing.base[6],
  },
  timestamp: {
    fontSize: typography.sizes.labelSm,
    fontFamily: typography.fonts.interMedium,
    color: colors.onSurfaceVariant,
    textAlign: 'center',
    marginBottom: spacing.base[4],
  },
  messageBubble: {
    padding: spacing.base[4],
    borderRadius: layout.borderRadius.md,
    maxWidth: '85%',
    marginBottom: spacing.base[4],
  },
  receivedMessage: {
    backgroundColor: colors.surfaceContainerLowest,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: colors.ghostBorder,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  sentMessage: {
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  messageText: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurface,
    lineHeight: 20,
  },
  sentMessageText: {
    color: colors.onPrimary,
  },
  inputArea: {
    padding: spacing.base[4],
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.surfaceContainerHighest,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceContainerHighest,
    borderRadius: layout.borderRadius.full,
    paddingHorizontal: spacing.base[4],
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurface,
    maxHeight: 120,
    paddingVertical: spacing.micro[3],
  },
  sendButton: {
    marginLeft: spacing.base[4],
  },
  sendButtonText: {
    fontFamily: typography.fonts.interSemiBold,
    color: colors.primary,
    fontSize: typography.sizes.bodyMd,
  },
});
