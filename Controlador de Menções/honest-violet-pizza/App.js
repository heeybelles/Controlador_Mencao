import React, { useState } from 'react';
import { Text, ScrollView, StyleSheet, View, Picker, Button } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>📑 Calcular Menções 📑</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <Card style={styles.card}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Boletim />
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

const Boletim = () => {
  const [notas, setNotas] = useState({
    LPLC: ['', '', '', ''],
    MAT: ['', '', '', ''],
    ING: ['', '', '', ''],
    ESP: ['', '', '', ''],
    BIO: ['', '', '', ''],
    SOC: ['', '', '', ''],
    FIL: ['', '', '', ''],
    GEO: ['', '', '', ''],
    QTS: ['', '', '', ''],
    IPSSI: ['', '', '', ''],
    PW: ['', '', '', ''],
    PAM: ['', '', '', ''],
    SE: ['', '', '', ''],
    TCC: ['', '', '', ''],
  });

  const calcularMencoes = () => {
    const mencoes = {
      MB: 0,
      B: 0,
      R: 0,
      I: 0,
    };

    Object.values(notas).forEach((valores) => {
      valores.forEach((nota) => {
        mencoes[nota]++;
      });
    });

    return mencoes;
  };

  const limparNotas = () => {
    const notasVazias = {
      LPLC: ['', '', '', ''],
      MAT: ['', '', '', ''],
      ING: ['', '', '', ''],
      ESP: ['', '', '', ''],
      BIO: ['', '', '', ''],
      SOC: ['', '', '', ''],
      FIL: ['', '', '', ''],
      GEO: ['', '', '', ''],
      QTS: ['', '', '', ''],
      IPSSI: ['', '', '', ''],
      PW: ['', '', '', ''],
      PAM: ['', '', '', ''],
      SE: ['', '', '', ''],
      TCC: ['', '', '', ''],
    };
    setNotas(notasVazias);
  };

  const mencoes = calcularMencoes();

  return (
    <View style={styles.boletimContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>M:</Text>
        <Text style={styles.headerText}>1º Bim</Text>
        <Text style={styles.headerText}>2º Bim</Text>
        <Text style={styles.headerText}>3º Bim</Text>
        <Text style={styles.headerText}>4º Bim</Text>
      </View>
      {Object.entries(notas).map(([materia, valores], index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.materia}>{materia}</Text>
          {valores.map((nota, idx) => (
            <Picker
              key={idx}
              selectedValue={nota}
              style={[styles.input, { color: nota === 'MB' ? 'blue' : nota === 'B' ? 'green' : nota === 'R' ? 'orange' : nota === 'I' ? 'red' : 'black' }]}
              onValueChange={(itemValue) => {
                const newNotas = { ...notas };
                newNotas[materia][idx] = itemValue;
                setNotas(newNotas);
              }}
            >
              <Picker.Item label="Add"/>
              <Picker.Item label="MB" value="MB" />
              <Picker.Item label="B" value="B" />
              <Picker.Item label="R" value="R" />
              <Picker.Item label="I" value="I" />
            </Picker>
          ))}
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={[styles.total, { backgroundColor: 'blue' }]}>Total de MB: {mencoes.MB}</Text>
        <Text style={[styles.total, { backgroundColor: 'green' }]}>Total de B: {mencoes.B}</Text>
        <Text style={[styles.total, { backgroundColor: 'orange' }]}>Total de R: {mencoes.R}</Text>
        <Text style={[styles.total, { backgroundColor: 'red' }]}>Total de I: {mencoes.I}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Limpar" onPress={limparNotas} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  navbar: {
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
  },
  navbarText: {
    fontSize: 20,
    color: '#fff',
  },
  scrollContainer: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
  boletimContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'center',
  },
  materia: {
    flex: 1,
    marginRight: 10,
    color: 'black',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    color: 'black',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  total: {
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
});