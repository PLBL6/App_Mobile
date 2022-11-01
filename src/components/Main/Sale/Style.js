import { StyleSheet } from "react-native";

import colors from "../../../../colors/colors";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: 730
    },
    view1: {
        flex: 1,
        borderBottomWidth: 4,
        borderBottomColor: colors.whiteDarkLight,
        alignItems: 'center'
    },
    iconBackground: {
        height: 280,
        width: '100%'
    },
    view2: {
        flex: 6
    },
    view3: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 15,
        borderTopWidth: 10,
        borderTopColor: colors.whiteDarkLight
    },
    textTitle: {
        marginTop: 42,
        fontSize: 25
    },
    textInfo: {
        fontSize: 20,
        marginTop: 25,
        marginHorizontal: 40,
        textAlign: 'center'
    },
    btnDK: {
        height: '80%',
        width: 360,
        backgroundColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontSize: 20,
        color: colors.white
    }
})

export default styles