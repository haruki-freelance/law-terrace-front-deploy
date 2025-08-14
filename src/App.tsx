import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Top } from './components/top/top';

/** メインクラス */
export default function App() {
  // const [loaded] = useFonts({
  //   NotoSansJP: require('../assets/fonts/NotoSansJP-Regular.ttf'),
  // });

  return (
    <>
      <Top />
      <StatusBar style="auto" />
    </>
  );
}
