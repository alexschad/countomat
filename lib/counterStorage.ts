import { Counter } from "@/shared/Types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

const STORAGE_KEY = "counters";

// Get all counters
export const getAllCounters = async (): Promise<Counter[]> => {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
};

// Save all counters
export const saveAllCounters = async (counters: Counter[]) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(counters));
};

export const addCounter = async (title: string): Promise<Counter[]> => {
    const counters = await getAllCounters();
    const newCounter: Counter = {
        id: uuid.v4(),
        title,
        count: 0,
    };
    const updated = [...counters, newCounter];
    await saveAllCounters(updated);
    return updated;
};

export const incrementCounter = async (id: string): Promise<Counter[]> => {
    const counters = await getAllCounters();
    const updated = counters.map((c) =>
        c.id === id ? { ...c, count: c.count + 1 } : c
    );
    await saveAllCounters(updated);
    return updated;
};

export const decrementCounter = async (id: string): Promise<Counter[]> => {
    const counters = await getAllCounters();
    const updated = counters.map((c) =>
        c.id === id ? { ...c, count: c.count - 1 } : c
    );
    await saveAllCounters(updated);
    return updated;
};

export const deleteCounter = async (id: string): Promise<Counter[]> => {
    const counters = await getAllCounters();
    const updated = counters.filter((c) => c.id !== id);
    await saveAllCounters(updated);
    return updated;
};
export const resetCounter = async (id: string): Promise<Counter[]> => {
    const counters = await getAllCounters();
    const updated = counters.map((c) => (c.id === id ? { ...c, count: 0 } : c));
    await saveAllCounters(updated);
    return updated;
};
