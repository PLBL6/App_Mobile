import { StyleSheet } from "react-native"

import colors from '../../../../colors/colors'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: 700
    },
    contain: {
        paddingTop: 20,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: colors.yellowLight
    },
    contain2: {
        flex: 7
    },
    SectionStyle: {
        flexDirection: 'row',
        width: 300,
        marginTop: 25,
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
        margin: 10
    },
    input: {
        width: 290,
        height: 40,
        paddingHorizontal: 7,
        fontSize: 20
    },
    ImageStyle: {
        padding: 10,
        margin: 7,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
})

export default styles