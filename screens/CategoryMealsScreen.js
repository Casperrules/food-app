import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native';

import {CATEGORIES,MEALS} from '../data/dummy-data';
import Colors from '../constant/colors';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal=>meal.categoryIds.indexOf(catId)>=0);
    
    const renderMealItem = itemData=>{
        return(
            <MealItem image={itemData.item.imageUrl} 
            complexity={itemData.item.complexity} 
            affordability={itemData.item.affordability} 
            duration={itemData.item.duration} 
            title={itemData.item.title} 
            onSelect={()=>{
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: itemData.item.id
                    }
                })
            }} />
        )
    }

    return(
        <View style={styles.screen}>
            <FlatList style={{flex:1}} data={displayedMeals} keyExtractor={(item,index)=> item.id} renderItem={renderMealItem}/>

        </View>
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

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
})

export default CategoryMealsScreen;