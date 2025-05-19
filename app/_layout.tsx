import { useColorScheme } from "@/hooks/useColorScheme";
import useGlobalStyles from "@/hooks/useGlobalStyles";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });
    const styles = useGlobalStyles();

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <GestureHandlerRootView>
            <SafeAreaView style={styles.flex}>
                <SafeAreaProvider>
                    <ThemeProvider
                        value={
                            colorScheme === "dark" ? DarkTheme : DefaultTheme
                        }
                    >
                        <Stack>
                            <Stack.Screen
                                name="index"
                                options={{
                                    // Hide the header for this route
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen name="+not-found" />
                        </Stack>
                    </ThemeProvider>
                </SafeAreaProvider>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}
