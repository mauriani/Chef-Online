import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome5';

import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Requests from './pages/Requests';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            return <Icon name={iconName} size={size} color={color} />;
          }
          if (route.name === 'Categories') {
            iconName = 'md-fast-food-sharp';
            return <Icon name={iconName} size={size} color={color} />;
          }
          if (route.name === 'Cart') {
            iconName = 'md-cart-sharp';
            return <Icon name={iconName} size={size} color={color} />;
          }
          if (route.name === 'Requests') {
            iconName = 'file-invoice-dollar';
            return <IconF name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#570310',
        style: {
          backgroundColor: '#ef233c',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Casa',
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'Categorias',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Carrinho',
        }}
      />
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{
          title: 'Pedidos',
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={BottomNavigator}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Requests"
          component={Requests}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
