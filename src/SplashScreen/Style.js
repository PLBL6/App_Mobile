import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    imgage: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'contain'
    },
    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        flex: 1,
    },
})

export default styles