import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import {InputData} from '../../components';

export default class TambahKontak extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Nama"
          placeholder="Masukkan Nama"
        />
        <InputData
          label="No. HP"
          placeholder="Masukkan No. HP"
          keyboardType="number-pad"
        />

        <InputData
          label="Alamat"
          placeholder="Masukkan Alamat"
          isTextArea={true}
        />

        <TouchableOpacity style={styles.tombol} >
          <Text style={styles.textTombol}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
