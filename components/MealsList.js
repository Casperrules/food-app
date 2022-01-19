import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native'
import Colors from '../constant/colors';
import MealItem from './MealItem';


const MealsList = (props)=>{

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

    return <View style={styles.list}>
            <FlatList 
                style={{flex:1}} 
                data={props.listData} 
                keyExtractor={(item,index)=> item.id} 
                renderItem={renderMealItem}
            />
    </View>
}

const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
})

export default MealsList;