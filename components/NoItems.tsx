import { ThemedView } from "@/components/ThemedView";
import useGlobalStyles from "@/hooks/useGlobalStyles";
import { Counter } from "@/shared/Types";
import React from "react";
import { Text } from "react-native";

export default function NoItems({ items }: { items: Counter[] }) {
    const styles = useGlobalStyles();
    if (items === null) {
        return <></>;
    }

    return (
        <ThemedView style={styles.container}>
            <Text style={styles.noItemsText}>Press + to add new Counters</Text>
        </ThemedView>
    );
}
