import { Text, View } from "react-native";
import { styles } from "./style";
import LawTerraceLogo from "../svg/law-terrace-logo";

/**
 * ヘッダー画面
 * 
 * @returns 
 */
export const Header = () => {
    return (
        <View style={styles.container}>
            <LawTerraceLogo />
            <Text>HEADER</Text>
        </View>
    );
};