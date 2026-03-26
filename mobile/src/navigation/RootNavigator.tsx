import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { MainTabNavigator } from './MainTabNavigator';
import { CastingDetailsScreen } from '../screens/casting/CastingDetailsScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth Flow */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* Main App Flow */}
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        
        {/* Detail Screens */}
        <Stack.Screen 
          name="CastingDetails" 
          component={CastingDetailsScreen} 
          options={{
            headerShown: true, 
            headerTitle: '',
            headerBackTitle: 'Back'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
