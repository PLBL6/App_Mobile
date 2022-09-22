import { StyleSheet } from "react-native";

import colors from "../../../colors/colors";

const styles = (focused) => StyleSheet.create({
    tabBarIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 5
    },
    
    icon: {
        width: 25,
        height: 25,
        tintColor: focused ? colors.dark : colors.main
    },
    text: {
        color: focused ? colors.dark : colors.main, 
        fontSize: 12
    }
})

export default styles