import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './src/srceens/HomeScreen';
import NovaOcorrenciaScreen from './src/srceens/NovaOcorrenciaScreen';
import ListaOcorrenciasScreen from './src/srceens/ListaOcorrenciasScreen';
import { colors, fontSize } from './src/styles/theme';

export type RootTabParamList = {
  Home: undefined;
  NovaOcorrencia: undefined;
  ListaOcorrencias: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textLight,
          tabBarStyle: {
            height: 65,
            paddingBottom: 8,
            paddingTop: 8,
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'NovaOcorrencia') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'ListaOcorrencias') {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size ?? fontSize.lg} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Tab.Screen
          name="NovaOcorrencia"
          component={NovaOcorrenciaScreen}
          options={{ title: 'Nova' }}
        />
        <Tab.Screen
          name="ListaOcorrencias"
          component={ListaOcorrenciasScreen}
          options={{ title: 'Lista' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}