import React from 'react';
import { createStackNavigator, } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
import FavoritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constant/colors';

const defaultStackNavOptions = {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS != 'ios'? Colors.primaryColor:'',
        },
        headerTintColor: Platform.OS != 'ios' ? 'white':'black'
    }
}

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
        defaultNavigationOptions: defaultStackNavOptions
    }
    
);
//can change mode to modal to get modal like transition
// also possible to setup initial screen by initialRoutName property

//stack navigator for favorites

const FavNavigator = createStackNavigator({
        Favorites: FavoritesScreen,
        MealDetail: MealsDetailsScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo)=>{
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor:Colors.primaryColor
        }
    },
    Favorites:{
        screen: FavNavigator,
        navigationOptions:{
            tabBarLabel:'Favorites!',
            tabBarIcon: (tabInfo)=>{
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor:Colors.accentColor
        }
    }
}
// tabBarColor works only with shiftin as true can use background however if dont want shifting

const MealsFavTabNavigator = Platform.OS==='android'? createMaterialBottomTabNavigator(tabScreenConfig,{
    activeTintColor: 'white',
    shifting:true,

}) 
: createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeTintColor: Colors.accentColor,
}});

const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
},{
    defaultNavigationOptions: defaultStackNavOptions,
    navigationOptions: {
        drawerLabel: 'Filters'
    }
})

const MainNavigator = createDrawerNavigator({
    MealsFavs: { 
        screen: MealsFavTabNavigator,
        navigationOptions:{
            drawerLabel:'Meals',

        }
    },
    Filters: FilterNavigator,

},
{
    contentOptions:{
        activeTintColor: Colors.accentColor,
        lableStyle:{
            fontFamily:'open-sans-bold' //checkout official docs
        }
    }
});


export default createAppContainer(MainNavigator);