import useGlobalStyles from "@/hooks/useGlobalStyles";
import React, { JSX } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

const FloatingButton = ({
    children,
    action,
}: {
    children: JSX.Element;
    action?: (event: GestureResponderEvent) => void;
}) => {
    const styles = useGlobalStyles();
    return (
        <TouchableOpacity onPress={action} style={styles.floatingButton}>
            {children}
        </TouchableOpacity>
    );
};

export default FloatingButton;
