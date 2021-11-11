import { Dimensions, StyleSheet } from "react-native";

export const colors = {
    white: {
        100:    "rgba(255,255,255,1)",
        85:     "rgba(255,255,255,0.85)",
        70:     "rgba(255,255,255,0.7)",
        60:     "rgba(255,255,255,0.6)",
        50:     "rgba(255,255,255,0.5)",
        45:     "rgba(255,255,255,0.45)",
        30:     "rgba(255,255,255,0.3)",
        15:     "rgba(255,255,255,0.15)",
    },
    primary: {
        "":         "#20c0c5",
        "light":    "#23d3d9",
        "dark":     "#106366",
    },
    secondary: {
        100:    "rgba(50,55,87,1)",
        85:     "rgba(50,55,87,0.85)",
        70:     "rgba(50,55,87,0.7)",
        60:     "rgba(50,55,87,0.6)",
        50:     "rgba(50,55,87,0.5)",
        45:     "rgba(50,55,87,0.45)",
        30:     "rgba(50,55,87,0.3)",
        15:     "rgba(50,55,87,0.15)",
    },
}

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: "black",
    },
    homeContainer:{
        flex: 1,
        paddingHorizontal: 30
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        position: "absolute",
    },
    textWhite: {
        color: colors.white[100]
    },
    textBase: {
        fontSize: 14,
        color: colors.white[100],
        margin: 5,
        fontFamily: "Vollkorn",
    },
    textTitle: {
        color: colors.white[100],
        margin: 5,
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 38,
        letterSpacing: -0.01562,
    },
    textH1: {
        fontWeight: "300",
        fontSize: 30,
        lineHeight: 38,
        letterSpacing: -0.01562,
    },
    textH2: {
        fontWeight: "300",
        fontSize: 18.75,
        lineHeight: 23.75,
        letterSpacing: -0.00833,
    },
    textH3: {
        fontWeight: "400",
        fontSize: 15,
        lineHeight: 19,
        letterSpacing: 0,
    },
    textH4: {
        fontWeight: "400",
        fontSize: 10.625,
        lineHeight: 13.4585,
        letterSpacing: 0.00735,
    },
    textH5: {
        fontWeight: "400",
        fontSize: 7.5,
        lineHeight: 9.5,
        letterSpacing: 0,
    },
    textH6: {
        fontWeight: "300",
        fontSize: 6.25,
        lineHeight: 7.92,
        letterSpacing: 0.0075,
    },
    searchLogo: {
        width: 35,
        height: 35,
    }
});