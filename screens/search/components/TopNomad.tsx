import { View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import styles from '../../../styles/Global';
import NomadImage from './NomadImage';

const TopNomad = () => {
  return (
    <View style={{marginTop: -15, marginBottom: 60}}>
      <View style={styles.headerview}>
        <Header name="Top nomads" from="nomads" />
        <View>
          <View style={styles.nomadContainer}>
            <NomadImage url="https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g" />
            <NomadImage url="https://fastly.picsum.photos/id/106/2592/1728.jpg?hmac=E1-3Hac5ffuCVwYwexdHImxbMFRsv83exZ2EhlYxkgY" />
            <NomadImage url="https://fastly.picsum.photos/id/235/5000/3333.jpg?hmac=i9YaRj_AF62lGVYNlYhdL2gqRDxoUzypXLUXBj8ihCc" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopNomad;
