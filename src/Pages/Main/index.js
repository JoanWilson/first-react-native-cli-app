import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'digite seu nome!',
      input: ''
    };

    this.nameChange = this.nameChange.bind(this);
  }

  nameChange(text) {
    this.setState({nome: this.state.input});
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.texto}>
          Bem-vindo, {this.state.nome}
        </Text>

        <TextInput 
          placeholder='Digite seu nome'
          underlineColorAndroid="transparent"    
          onChangeText={text => this.setState({input: text})}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.nameChange}  
        >
          <Text style={styles.textButton}>Enviar nome</Text>
        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 45,
    width: 300,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    marginTop: 40
  },

  texto: {
    textAlign: 'center',
    fontSize: 25
  },

  button: {
    marginTop: 20,
    backgroundColor: '#222',
    height: 60,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textButton: {
    color: 'white',
    fontSize: 20
  }
})

export default App;
