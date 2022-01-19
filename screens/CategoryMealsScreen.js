import React from 'react';

import {CATEGORIES,MEALS} from '../data/dummy-data';


import MealsList from '../components/MealsList';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal=>meal.categoryIds.indexOf(catId)>=0);
    
    

    return(
        <MealsList listData={displayedMeals} navigation={props.navigation} />
    );

};

CategoryMealsScreen.navigationOptions = (navigationData)=>{
    //navigationData contains navigation object that we get in the props
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(cat=>cat.id === catId);
    return {
        headerTitle: selectedCat.title,
    }
}



export default CategoryMealsScreen;