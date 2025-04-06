import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/global/theme';
import { Main } from '@/screens/main';

export function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Main /> : <ActivityIndicator size="large" />}
    </ThemeProvider>
  );
}
