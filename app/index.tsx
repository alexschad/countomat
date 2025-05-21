import CounterItem from "@/components/CounterItem";
import NoItems from "@/components/NoItems";
import AddCounterModal from "@/components/ui/addCounterModal";
import FloatingButton from "@/components/ui/FloatingButton";
import useGlobalStyles from "@/hooks/useGlobalStyles";
import { addCounter, getAllCounters } from "@/lib/counterStorage";
import { Counter } from "@/shared/Types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const CounterList = () => {
    const [counters, setCounters] = useState<Counter[] | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const styles = useGlobalStyles();

    const updateCounters = async () => {
        const storedCounters = await getAllCounters();
        setCounters(storedCounters);
    };
    useEffect(() => {
        updateCounters();
    }, []);

    useEffect(() => {
        if (counters !== null) {
            SplashScreen.hideAsync();
        }
    }, [counters]);

    const handleAddCounter = async (title: string) => {
        const updatedCounters = await addCounter(title);
        setCounters(updatedCounters);
    };

    if (counters === null) {
        return <></>;
    }

    return (
        <View style={styles.listContainer}>
            {!counters || counters?.length === 0 ? (
                <NoItems items={counters} />
            ) : (
                <FlatList
                    data={counters}
                    renderItem={({ item }) => (
                        <CounterItem
                            counter={item}
                            key={item.id}
                            updateCounters={updateCounters}
                        />
                    )}
                />
            )}
            <AddCounterModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onAdd={handleAddCounter}
            />
            <FloatingButton action={() => setModalVisible(true)}>
                <MaterialCommunityIcons size={28} name="plus" color={"white"} />
            </FloatingButton>
        </View>
    );
};
export default CounterList;
