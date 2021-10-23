import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export const Convertidor = () => {
  const [tMoneda, setTMoneda] = useState("do");

  const [camMoneda, setCamMoneda] = useState("co");

  const [cMoneda, setCMoneda] = useState("eu");

  const [convertir, setConvertir] = useState(0);

  const [resultado, setResultado] = useState(0);

  const handleChangeTipoMoneda = (texto: string) => {
    setTMoneda(texto);
  };

  const handleChangeCambioMoneda = (texto: string) => {
    setCamMoneda(texto);
  };

  const handleChangeCMonedA = (texto: string) => {
    setCMoneda(texto);
  };

  const handleChangeConvertir = (texto: string) => {
    const numero = parseFloat(texto);
    setConvertir(numero);
  };
  const Calcular = () => {
    if (tMoneda === "do" && camMoneda === "co") {
      const result = convertir * 35.12;
      setResultado(result);
    } else if (tMoneda === "co" && camMoneda == "do") {
      const result = convertir * 0.028;
      setResultado(result);
    } else if (tMoneda === "eu" && camMoneda === "co") {
      const result = convertir * 40.9;
      setResultado(result);
    } else if (tMoneda === "eu" && camMoneda === "do") {
      const result = convertir * 1.16;
      setResultado(result);
    }
  };
  return (
    <View>
      <Text>T Moneda</Text>
      <TextInput
        defaultValue={tMoneda}
        style={styles.input}
        maxLength={2}
        onChangeText={(text) => handleChangeTipoMoneda(text)}
      />
      <Text>Cam Moneda</Text>
      <TextInput
        defaultValue={camMoneda}
        style={styles.input}
        maxLength={2}
        onChangeText={(text) => handleChangeCambioMoneda(text)}
      />
      <Text>C Moneda</Text>
      <TextInput
        defaultValue={cMoneda}
        style={styles.input}
        maxLength={2}
        onChangeText={(text) => handleChangeCMonedA(text)}
      />
      <Text>Convertir</Text>
      <TextInput
        defaultValue={convertir.toString()}
        style={styles.input}
        onChangeText={(text) => handleChangeConvertir(text)}
      />
      <Text>Resultado</Text>
      <TextInput defaultValue={resultado.toString()} style={styles.input} />
      <View style={styles.button}>
        <Button title="Calcular" onPress={Calcular} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
      
    backgroundColor: "blue",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 55,
    position: "absolute",
    marginTop: 10,
  },

  input: {
    width: 200,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 0,
    borderColor: "pink",
    marginTop: 10,
  },
});