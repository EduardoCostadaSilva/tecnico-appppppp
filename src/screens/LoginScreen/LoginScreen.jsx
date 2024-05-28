import { Button, Icon, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../../config/styles";
import { View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../config/firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  async function handleLogin() {
    // Aqui você pode adicionar a lógica para realizar o login do usuário
    if (email == "" || senha == "") {
      alert("Está faltando algum Campo ein!!!!");
    } else if (email == "" && senha == "") {
      alert("Está faltando preencher os campos!!!!");
    } else {
        alert("Sucesso!!!")
    }
    try {
      const userRef = signInWithEmailAndPassword(auth, email, senha);
      if (userRef) {
        console.log("Usuário logado com sucesso!");
        navigation.navigate("HomeScreen");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Icon source="account" size={100} />
        <Text>Vamos fazer Login</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          style={styles.input}
        />
        <TextInput
          label="Senha"
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          secureTextEntry={hidePassword}
          right={
            <Icon
              name={hidePassword ? "eye" : "eye-off"}
              onPress={() => setHidePassword(!hidePassword)}
            />
          }
        />
        <Button onPress={handleLogin}>Fazer login</Button>
        <Button onPress={() => navigation.navigate("RegisterScreen")}>
          Fazer cadastro
        </Button>
      </View>
    </Surface>
  );
}
