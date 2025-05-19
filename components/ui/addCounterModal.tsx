import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
    visible: boolean;
    onClose: () => void;
    onAdd: (title: string) => void;
};

export default function AddCounterModal({ visible, onClose, onAdd }: Props) {
    const [title, setTitle] = useState("");

    const handleAdd = () => {
        if (title.trim()) {
            onAdd(title.trim());
            setTitle("");
            onClose();
        }
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        backgroundColor: "white",
                        padding: 20,
                        margin: 20,
                        borderRadius: 8,
                    }}
                >
                    <Text style={styles.title}>Add New Counter</Text>
                    <TextInput
                        placeholder="Counter Name"
                        value={title}
                        onChangeText={setTitle}
                        style={styles.input}
                        autoFocus
                    />
                    <View style={styles.buttons}>
                        <Button title="Cancel" onPress={onClose} color="#888" />
                        <Button title="Add" onPress={handleAdd} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    modalContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 20,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
