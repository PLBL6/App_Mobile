import { StyleSheet } from "react-native"

import colors from "../../../../../colors/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'row'
    },
    iconArrow: {
        height: 20,
        width: 20,
        marginTop: 50,
        marginLeft: 15
    },
    textTitle: {
        marginTop: 42,
        fontSize: 25,
        marginLeft: 20
    },
    info: {
        flex: 7,
        backgroundColor: colors.whiteDarkLight,
        marginVertical: 10
    }
})

export default styles