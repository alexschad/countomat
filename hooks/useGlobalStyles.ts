import { DefaultTheme, useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";

type Theme = typeof DefaultTheme;

const getGlobalStyles = (props: { colors: Theme["colors"] }) => {
    const { colors } = props;
    return StyleSheet.create({
        flex: {
            flex: 1,
        },
        flexgrow: {
            flexGrow: 1,
        },
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        listContainer: {
            justifyContent: "flex-start",
            backgroundColor: colors.background,
            padding: 8,
            height: "100%",
        },
        listItemContainer: {
            height: 120,
            margin: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: colors.card,
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: colors.border,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
        listItemCounterContainer: {
            height: 60,
            width: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 50,
            borderColor: colors.border,
            backgroundColor: "green",
        },
        counterText: {
            fontSize: 30,
            color: colors.text,
            fontWeight: "bold",
        },
        listItemTitleText: {
            margin: 0,
            padding: 0,
            fontSize: 25,
            fontWeight: "bold",
            color: colors.text,
            alignContent: "flex-start",
            textAlign: "left",
            includeFontPadding: false,
            flexShrink: 1,
        },
        listItemTextContainer: {
            width: "60%",
            paddingLeft: 10,
            paddingRight: 3,
        },
        counterButton: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
        },
        counterButtonText: {
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
        },
        rightActions: {
            marginLeft: 5,
            marginTop: 5,
            marginBottom: 5,
            width: 40,
            flexDirection: "row",
        },
        rightActionsAnimatedView: {
            flex: 1,
            backgroundColor: "rgb(254, 216, 212)",
            justifyContent: "center",
            transform: [{ translateX: 0 }],
        },
        rightActionsRectButton: {
            backgroundColor: "rgb(254, 216, 212)",
            alignItems: "center",
        },
        floatingButton: {
            backgroundColor: colors.primary,
            borderColor: "#1258c9",
            borderWidth: 1,
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 30,
            right: 30,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        noItemsText: {
            fontSize: 40,
            fontWeight: "bold",
            color: colors.primary,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 100,
            textAlign: "center",
        },
    });
};
function useGlobalStyles() {
    const { colors } = useTheme();

    // We only want to recompute the stylesheet on changes in color.
    const styles = React.useMemo(() => getGlobalStyles({ colors }), [colors]);

    return styles;
}

export default useGlobalStyles;
