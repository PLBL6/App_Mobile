import { StyleSheet } from "react-native"

import colors from "../../../../../colors/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: '13%',
        backgroundColor: colors.white,
        flexDirection: 'row'
    },
    iconArrow: {
        height: 20,
        width: 20,
        marginTop: 50,
        marginLeft: 15
    },
    textTitle1: {
        marginTop: 42,
        fontSize: 25,
        marginLeft: 20
    },
    info: {
        backgroundColor: colors.whiteDarkLight,
        marginVertical: 10,
        backgroundColor: colors.white,
        padding: 20,
        alignContent: 'center'
    },
    content1: {
        backgroundColor: colors.white,
        borderWidth: 1,

    },
    textAreaContainer: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: colors.white,
        marginVertical: 10
    },
    textArea: {
        height: 150,
        textAlignVertical: "top",
        fontSize: 20
    },
    viewBtn: {
        marginVertical: 20,
        backgroundColor: colors.mainHome,
        paddingVertical: 15,
        marginHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    textBtn: {
        fontSize: 20,
        color: colors.white
    },
    viewPading: {
        marginVertical: 15
    },
    textTitle: {
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 5
    },
    viewBtnCosan: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: colors.mainHome,
        margin: 5,
        borderRadius: 20
    },
    viewTextCosan: {
        color: colors.mainHome,
        fontSize: 17
    }
})

export default styles