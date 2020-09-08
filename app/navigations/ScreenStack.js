import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "../screens/Screen1";

const Stack = createStackNavigator();

export default function ScreenStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="screenstack"
                component={Screen1}
                options={{ title: "Pantalla1" }} />
        </Stack.Navigator>        
    );
}