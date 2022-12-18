import { StyleSheet } from "react-native"

import colors from '../../../../colors/colors'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: 700
    },
    contain: {
        marginTop: 20,
        flexDirection: 'row',
        flex: 1
    },
    contain1: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center', 
        paddingHorizontal: 15
    },
    contain2: {
        flex: 5
    },
    icon: {
        height: 25,
        width: 25,
        marginTop: 30,
        marginRight: 10
    },
    text: {
        color: colors.dark,
        marginVertical: 6,
        marginLeft: 8,
        marginRight: 7
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    name: {
        marginLeft: 20,
        fontSize: 25,
        fontWeight: "bold",
        color: colors.white
    },
    cover: {
        height: 200,
        width: '100%'
    },
    notLogin: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    btnSignIn: {
        backgroundColor: colors.white,
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.main,
        borderWidth: 1
    },
    btnSignUn: {
        backgroundColor: colors.orange,
        marginHorizontal: 10,
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.white,
        borderWidth: 1
    },
    textBtn1: {
        fontSize: 15,
        color: colors.orange
    },
    textBtn2: {
        fontSize: 15,
        color: colors.white
    },
    
})

export default styles