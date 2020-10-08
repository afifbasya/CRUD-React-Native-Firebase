import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class DetailKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kontak: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Kontak/'+ this.props.route.params.id)
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        this.setState({
          kontak: kontakItem,
        });
      });
  }

  render() {
    const {kontak} = this.state;
    return (
      <View style={styles.pages}>
        <Text>Nama : </Text>
        <Text style={styles.text}>{kontak.nama} </Text>

        <Text>Nomor HP : </Text>
        <Text style={styles.text}>{kontak.nomorHP} </Text>

        <Text>Alamat : </Text>
        <Text style={styles.text}>{kontak.alamat} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    pages : {
        margin: 30,
        padding: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10   
    }
});
