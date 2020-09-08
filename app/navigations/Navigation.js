import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import ScreenStack from "./ScreenStack";
import AccountStack from "./AccountStack"

import Screen2 from "../screens/Screen2"
import Screen3 from "../screens/Screen3"
import Screen4 from "../screens/Screen4"

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="screen3"
                tabBarOptions={{
                    inactiveTintColor: "#646464",
                    activeTintColor: "#00a680",
                }}
                
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                })}
            >
                <Tab.Screen name="screen1" component={ScreenStack} options={{ title: "Pantalla 1"}}/>
                <Tab.Screen name="screen2" component={Screen2}/>
                <Tab.Screen name="screen3" component={Screen3}/>
                <Tab.Screen name="screen4" component={Screen4}/>
                <Tab.Screen name="Account" component={AccountStack} options={{ title: "Account" }}/>
            </Tab.Navigator>
        </NavigationContainer>        
    )
}

function screenOptions(route, color){
    let iconName;

    switch (route.name) {
        case "screen1":
            iconName= "compass-outline"
            break;
        case "screen2":
            iconName= "heart-outline"
            break;
        case "screen3":
            iconName= "star-outline"
            break;
        case "screen4":
            
            break;
        case "Account":
            iconName= "account-outline"
            break;
    }

    return (
        <Icon type="material-community" name={iconName} size={22} color={color}/>
    );
}