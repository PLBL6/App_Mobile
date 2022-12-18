import { StyleSheet } from "react-native"

import colors from "../../../colors/colors"

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.mainHome,
      },
      logoText: {
        fontSize: 35,
        marginTop: 20,
        color: 'white',
        fontWeight: '700',
      },
      contentContainer: {
        top: '30%',
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 50
      },
      logoContainer: {
        flexDirection: 'row',
      },
})

export default styles