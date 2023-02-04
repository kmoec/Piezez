import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenLimit from '../screens/ScreenLimit/ScreenLimit'

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={ ScreenLimit } />
    </Tab.Navigator>
  );
}