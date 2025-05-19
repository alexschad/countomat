import useGlobalStyles from "@/hooks/useGlobalStyles";
import {
    decrementCounter,
    deleteCounter,
    incrementCounter,
} from "@/lib/counterStorage";
import { Counter } from "@/shared/Types";
import AntIcons from "@expo/vector-icons/AntDesign";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Animated from "react-native-reanimated";

const CounterItem = ({
    counter,
    updateCounters,
}: {
    counter: Counter;
    updateCounters: () => Promise<void>;
}) => {
    const styles = useGlobalStyles();
    const { colors } = useTheme();

    const deleteAction = async () => {
        await deleteCounter(counter.id);
        updateCounters();
    };

    const deleteArticle = () => {
        Alert.alert(
            "Delete the counter?",
            "This action cannot be undone!",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: () => {
                        deleteAction();
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const renderRightActions = () => {
        return (
            <View style={styles.rightActions}>
                <Animated.View style={styles.rightActionsAnimatedView}>
                    <RectButton
                        style={[styles.rightActionsRectButton]}
                        onPress={deleteArticle}
                    >
                        <AntIcons
                            name="delete"
                            size={23}
                            color={colors.notification}
                        />
                    </RectButton>
                </Animated.View>
            </View>
        );
    };

    const handleChangeCount = async (id: string, delta: number) => {
        if (delta === 1) await incrementCounter(id);
        else await decrementCounter(id);
        updateCounters();
    };

    return (
        <Swipeable
            renderRightActions={renderRightActions}
            overshootRight={false}
            overshootLeft={false}
        >
            <View style={styles.listItemContainer}>
                <View style={styles.listItemTextContainer}>
                    <Text style={styles.listItemTitleText}>
                        {counter.title}
                    </Text>
                </View>
                <View>
                    <Text style={styles.counterText}>{counter.count}</Text>
                </View>
                <View>
                    <Pressable
                        style={styles.counterButton}
                        onPress={() => handleChangeCount(counter.id, 1)}
                    >
                        <Text style={styles.counterButtonText}>+</Text>
                    </Pressable>
                    <Pressable
                        style={styles.counterButton}
                        onPress={() => handleChangeCount(counter.id, -1)}
                    >
                        <Text style={styles.counterButtonText}>-</Text>
                    </Pressable>
                </View>
            </View>
        </Swipeable>
    );
};

export default CounterItem;
