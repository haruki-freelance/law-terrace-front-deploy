import { Text, View } from "react-native";
import { styles } from "./style";
import { Header } from "../header/header";

/**
 * トップ画面
 * 
 * @returns 
 */
export const Top = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Text>TOP</Text>
        </View>
    );
};