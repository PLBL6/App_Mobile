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
        flexDirection: 'row'
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
    tag: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        width: 120,
        marginVertical: 25,
        marginRight: 160,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    },
    text: {
        color: colors.dark,
        marginVertical: 6,
        marginLeft: 8,
        marginRight: 7
    },
    arrow: {
        marginVertical: 6,
        height: 20,
        width: 20
    },
    avatar: {
        height: 100,
        width: 100,
        marginLeft: 20,
        borderRadius: 100
    },
    name: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white
    },
    cover: {
        height: 200,
        width: '100%'
    }
})

export default styles