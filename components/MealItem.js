import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const MealItem = props => {
    return(
        <View style = {styles.mealItem}>
            <TouchableOpacity onPress={props.onSelect}>
                <View >
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem:{
        height: 200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        overflow:'hidden',
        marginVertical:10,
    },  
    title:{
        fontFamily: 'open-sans-bold',
        fontSize:19,
        color:'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign: 'center',

    },
    mealRow:{
        flexDirection:'row',
    },
    mealHeader:{
        height:'85%',

    },
    mealDetail:{
        height:'15%',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    bgImage:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    }
});

export default MealItem;