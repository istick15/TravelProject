import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPage from './Pages/FirstPage';
import SearchThePlace from './Pages/SearchThePlace';
import CreateLocation from './Pages/CreateLocation';
import ShowLocation from './Pages/ShowLocation';
import ChooseMap from './Pages/ChooseMap';
import TourismMap from './Pages/Map/TourismMap';
import AccidentMap from './Pages/Map/AccidentMap';
import DrawerMenu from './Components/DrawerMenu';
import LoginPage from './Pages/LoginPage';
import DialogSearch from './Components/Dialogs/DialogSearch';
import DialogArea from './Components/Dialogs/DialogArea';
import DialogDashboard from './Components/Dialogs/DialogDashboard';
import DialogCoordinate from './Components/Dialogs/DialogCoordinate';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={FirstPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="first"
          component={SearchThePlace}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="second"
          component={ShowLocation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="third"
          component={CreateLocation}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="choose"
          component={ChooseMap}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tourism"
          component={DrawerMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="accident"
          component={AccidentMap}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="search"
          component={DialogSearch}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="area"
          component={DialogArea}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="dashboard"
          component={DialogDashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="coordinate"
          component={DialogCoordinate}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
console.disableYellowBox = true;
export default App;
