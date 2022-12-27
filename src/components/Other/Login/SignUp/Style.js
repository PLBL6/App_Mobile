import { StyleSheet } from "react-native"
import colors from '../../../../../colors/colors'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingTop: 20
    },
    btnBack: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 5
    },
    view1: {
        flex: 1,
        alignItems: 'flex-start'
    },
    view2: {
        flex: 1,
        alignItems: 'center'
    },
    view3: {
        marginBottom: 50,
        flex: 4,
        marginHorizontal: 15,
        borderRadius: 20
    },
    view4: {
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Item1: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    Item2: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 20
    },
    Item3: {
        flex: 1,
        alignItems: 'flex-end',
        marginHorizontal: 20
    },
    Item4: {
        flex: 1,
        alignItems: 'center'
    },
    iconArrow: {
        height: 20,
        width: 20
    },
    iconShop1: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: 10
    },
    textBack: {
        fontSize: 20,
        marginLeft: 5
    },
    content: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textAll: {
        fontSize: 15,
        color: colors.whiteDark
    },
    textInput: {
        flex: 5,
        marginLeft: 10
    },
    iconUsername: {
        height: 30,
        width: 30
    },
    infoLogin: {
        flexDirection: 'row',
        width: '100%',
        marginRight: 40,
        borderBottomColor: colors.whiteDark,
        borderBottomWidth: 2
    },
    textSignUp: {
        marginLeft: 5,
        color: colors.dark,
        textDecorationLine: 'underline'
    },
    brLogin: {
        backgroundColor: colors.green,
        width: 200,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    login: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.white
    },
    iconShop: {
        height: 250,
        width: 250,
        borderRadius: 100
    },
})

export default styles