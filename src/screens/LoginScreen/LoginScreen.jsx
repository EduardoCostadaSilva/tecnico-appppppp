import { Button, Icon, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../../config/styles";
import { View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    // Aqui você pode adicionar a lógica para realizar o login do usuário
    console.log("Login realizado com sucesso!");
    try {
      const userRef = signInWithEmailAndPassword(auth, email, senha);
      if (userRef) {
        console.log("Usuário logado com sucesso!");
        navigation.navigate("HomeScreen");
      }
    } catch (e) {}
  }
  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Icon source="account" size={100} />
        <TextInput
          label={"Digite seu e-mail"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label={"Digite sua senha"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <Button onPress={handleLogin} mode="contained">Fazer login</Button>
        <Button onPress={() => navigation.navigate("RegisterScreen")} mode="outlined">
          Fazer cadastro               
        </Button>
        <Button onPress={() => navigation.navigate("SettingsScreen")} >
          Configurações
        </Button>
      </View>
    </Surface>
  );
}

