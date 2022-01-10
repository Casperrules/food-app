import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {Platform} from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
import Colors from '../constant/colors';

// we can also setup options directly on navigator

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen:CategoriesScreen,
            navigationOptions:{
                headerStyle:{
                    backgroundColor: Platform.OS != 'ios'? Colors.primaryColor:'',
                },
                headerTintColor: Platform.OS != 'ios' ? 'white':'black'
            }
        },
        CategoryMeals:{
            screen: CategoryMealsScreen,
            navigationOptions: {
                headerStyle:{
                    backgroundColor: Platform.OS != 'ios'? Colors.primaryColor:'',
                },
                headerTintColor: Platform.OS != 'ios' ? 'white':'black'
            }
        },
        MealDetail: MealsDetailsScreen
    },
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: Platform.OS != 'ios'? Colors.primaryColor:'',
            },
            headerTintColor: Platform.OS != 'ios' ? 'white':'black'
        }
    }
    
);
//can change mode to modal to get modal like transition
// also possible to setup initial screen by initialRoutName property
export default createAppContainer(MealsNavigator);