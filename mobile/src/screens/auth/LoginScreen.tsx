import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { colors } from '../../theme/colors';
import { spacing, typography, layout } from '../../theme/theme';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      // Navigate or handle success
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Welcome back.</Text>
              <Text style={styles.subtitle}>Log in to access The Digital Stage.</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email address</Text>
                <TextInput
                  placeholder="name@example.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>

              <View style={styles.forgotPasswordContainer}>
                <Button
                  variant="tertiary"
                  title="Forgot password?"
                  onPress={() => { }}
                  textStyle={styles.forgotPasswordText}
                  style={styles.forgotPasswordButton}
                />
              </View>

              <Button
                title="Log In"
                onPress={handleLogin}
                loading={loading}
                style={styles.loginButton}
              />
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <Button
                variant="tertiary"
                title="Sign up"
                onPress={() => { }}
                textStyle={styles.signupText}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.base[6],
    paddingTop: spacing.macro[16],
  },
  header: {
    marginBottom: spacing.macro[12],
  },
  title: {
    fontSize: typography.sizes.displayLg,
    fontFamily: typography.fonts.interBold,
    color: colors.onSurface,
    marginBottom: spacing.micro[2],
    lineHeight: 64, // To accommodate displayLg
  },
  subtitle: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurfaceVariant,
  },
  form: {
    backgroundColor: colors.surfaceContainerLowest,
    padding: spacing.base[6],
    borderRadius: layout.borderRadius.md,
    // Lift the form card using ambient shadow principles
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.08,
    shadowRadius: 32,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.ghostBorder,
    marginBottom: spacing.macro[8],
  },
  inputGroup: {
    marginBottom: spacing.base[6],
  },
  label: {
    fontSize: typography.sizes.labelSm,
    fontFamily: typography.fonts.interSemiBold,
    color: colors.onSurface,
    marginBottom: spacing.micro[2],
    letterSpacing: typography.letterSpacing.labelSm,
    textTransform: 'uppercase',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: spacing.base[6],
    marginTop: -spacing.micro[2],
  },
  forgotPasswordButton: {
    paddingVertical: 0,
  },
  forgotPasswordText: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interMedium,
    color: colors.primary,
    textDecorationLine: 'none',
  },
  loginButton: {
    marginTop: spacing.micro[2],
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: spacing.macro[8],
  },
  footerText: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interRegular,
    color: colors.onSurfaceVariant,
  },
  signupText: {
    fontSize: typography.sizes.bodyMd,
    fontFamily: typography.fonts.interSemiBold,
    color: colors.primary,
    textDecorationLine: 'none',
  },
});
