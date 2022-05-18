import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native-web';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Home'
        screenOptions = {{
            cardStyle: {backgroundColor: '#ffffff'},
            headerStyle: {
                height: 110,
                backgroundColor: '#FFD8CC',
                borderBottomWidth: 1,
                borderBottomColor: '#99154E',
            },
            headerTitleStyle: {fontsize: 24},
            headerTintColor: '#e74c3c',
            headerTitleAlign: 'center',
            headerBackImage: ({tintColor}) =>{
                const style = {
                    marignRight: 5,
                    marginLeft: Platform.OS === 'ios' ? 11 : 0,
                };
                return (
                    <MaterialCommunityIcons
                        name='arrow-left-circle-outline'
                        size={30}
                        color={tintColor}
                        style={style}
                    />
                );
            },
            headerBackTitleVisible: true,
            headerBackTitle: 'Prev',
            headerTitleStyle: {fontsize: 24},
            // 헤더 숨기기
            // headerMode: 'none',
            }}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen 
                name='List' 
                component={List}
                options = {{ headerTitle: 'List Screen' }}
                />
            <Stack.Screen name='Item' component={Item} />
        </Stack.Navigator>  
    );
};

export default StackNavigation;