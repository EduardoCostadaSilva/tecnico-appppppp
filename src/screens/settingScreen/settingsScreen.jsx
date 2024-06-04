import {styles} from '../../config/styles'
import { Button, Surface, Text } from "react-native-paper";
import { useTheme } from '../../contexts/ThemeContext';


export default function SettingsScreen(){
    const {toggleTheme, isDarkTheme} = useTheme();
    return(
        <Surface
            style={styles.container}
        >
            <Text>Configurações</Text>
            <Button onPress={toggleTheme}>Alternar tema</Button>
        </Surface>
    )
}