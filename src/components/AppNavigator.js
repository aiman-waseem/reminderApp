import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainScreen from './MainScreen';
import Apps from './Apps';
import MedicineForm from './MedicineForm';

const AppNavigator = createBottomTabNavigator(
  {
    Home: MainScreen,
    LocationAlert: Apps,
    MedicinalForm: MedicineForm,
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(AppNavigator);
