import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile99859Navigator from '../features/UserProfile99859/navigator';
import Maps99840Navigator from '../features/Maps99840/navigator';
import Settings99818Navigator from '../features/Settings99818/navigator';
import Settings99803Navigator from '../features/Settings99803/navigator';
import NotificationList99802Navigator from '../features/NotificationList99802/navigator';
import Maps99801Navigator from '../features/Maps99801/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile99859: { screen: UserProfile99859Navigator },
Maps99840: { screen: Maps99840Navigator },
Settings99818: { screen: Settings99818Navigator },
Settings99803: { screen: Settings99803Navigator },
NotificationList99802: { screen: NotificationList99802Navigator },
Maps99801: { screen: Maps99801Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
