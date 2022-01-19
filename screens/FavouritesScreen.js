import React from 'react';
import MealsList from '../components/MealsList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';

const FavouritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id==='m1'||meal.id === 'm2');
    return(
        <MealsList listData={favMeals} navigation={props.navigation}/>
    );

};

FavouritesScreen.navigationOptions=(navData)=>{
    return {
        headerTitle: 'favourite meals',
    headerStyle:{
        backgroundColor: Platform.OS != 'ios'? Colors.primaryColor:'',
    },
    headerTintColor: Platform.OS != 'ios' ? 'white':'black',
    headerLeft: ()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}  >
        <Item title='menu' iconName='ios-menu' onPress={()=>navData.navigation.toggleDrawer()}/>
    </HeaderButtons>
    }
}
export default FavouritesScreen;