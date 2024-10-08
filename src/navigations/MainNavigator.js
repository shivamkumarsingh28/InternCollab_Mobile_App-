import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {StatusBar} from 'react-native';
import TripDetailsScreen from '../screens/TripDetailsScreen';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Login from '../screens/Login';
import Logo from '../screens/Logo';
import Signup from '../screens/Signup';

const Stack = createSharedElementStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar hidden /> */}
      <Stack.Navigator initialRouteName='Logo'>
        <Stack.Screen name='Logo' component={Logo} options={{headerShown:false}} />
        <Stack.Screen name='Login' component={Login} options={{
            headerShown: false
          }} />
        <Stack.Screen name='Signup' component={Signup} options={{
            headerShown: false
          }}/>
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="TripDetails"
          component={TripDetailsScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
