import { StyleSheet } from "react-native"

import colors from "../../../../../colors/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        width: '100%',
        height: 100,
        backgroundColor: colors.white,
        borderBottomColor: colors.whiteDarkLight,
        borderBottomWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item1: {
        height: 100,
        backgroundColor: colors.white,
        borderBottomColor: colors.whiteDarkLight,
        borderBottomWidth: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 60,
        width: 60,
        marginHorizontal: 20
    },
    info: {
        justifyContent: 'center'
    },  
    infoTotal: {
        justifyContent: 'center',
        marginLeft: 20
    },
    textName: {
        fontSize: 20,
        marginBottom: 10
    },
    textNumber: {
        fontSize: 17,
        color: colors.whiteDark
    },
    iconArrow: {
        height: 30,
        width: 30,
        marginRight: 7
    }
})

export default styles