import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constant/colors';


const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return(
            <CategoryGridTile title = {itemData.item.title} onSelect={()=>{
                props.navigation.navigate({routeName:'CategoryMeals', params:{
                    categoryId: itemData.item.id
                }})
            }}
            color={itemData.item.color}
            />
        )
    }
    
    return(
        <FlatList numColumns={2} 
            data={CATEGORIES} renderItem={renderGridItem}
        />
    );

};

//optional way to add properties
// this can also be a function if data changes.. check the categoryMealsscreen to see the function way of doing it
CategoriesScreen.navigationOptions={
    headerTitle: 'Meal Category',
    headerStyle:{
        backgroundColor: Platform.OS != 'ios'? Colors.primaryColor:'',
    },
    headerTintColor: Platform.OS != 'ios' ? 'white':'black'
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    },
    
})

export default CategoriesScreen;

{/* <Text>Categories Screen</Text>
            <Button title="goto meals" onPress={()=>{
                props.navigation.navigate({routeName: 'CategoryMeals'})
                // alternatively use props.navigation.push(identifier).. for stack..
                // is useful to use push if you want to go to same screen again and again..
                // (eg in dropbox like app.. i.e. same screen with different content.. 
                // would give foulder navigation like behaviour)
                // can use pop() to go back or use goBack() function
                // use popToTop() to go to the root screen
                // to navigate with replacing the current screen , use replace() will give no back.. e.g.login screen
                

            }}/> */}