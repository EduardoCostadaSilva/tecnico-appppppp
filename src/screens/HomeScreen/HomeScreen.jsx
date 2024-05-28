import { Text } from "react-native";
import { styles } from "../../config/styles";
import { Surface } from "react-native-paper";

export default function HomeScreen({navigation}) {
    return(
        <Surface
        style={styles.container}
        >
            <Text>Home</Text>
        </Surface>
    )
}