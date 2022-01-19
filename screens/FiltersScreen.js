import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const FilterScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Filter Screen</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
    }
})

FilterScreen.navigationOptions=(navData)=>{
    return {
        headerTitle: 'filter meals',
    headerStyle:{
        backgroundColor: Platform.OS != 'ios'? Colors.primaryColor:'',
    },
    headerTintColor: Platform.OS != 'ios' ? 'white':'black',
    headerLeft: ()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}  >
        <Item title='menu' iconName='ios-menu' onPress={()=>navData.navigation.toggleDrawer()}/>
    </HeaderButtons>
    }
}

export default FilterScreen;