import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/Home/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/Home/TripsList';
import {useNavigation} from '@react-navigation/native';


const HomeScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const homePageData = async () => {
  
    const response = await fetch('http://192.168.100.53:8080/api/posts');
    if (response.ok) {
        const result = await response.json();
        // await AsyncStorage.setItem('accessToken', data['token']);
        // Alert("ready to go home page")
        setData(result['content'])
        console.log(result['content'][0].postImage);
        // navigation.navigate("Root");

    }
}

useEffect(()=> {
    // fetch('http://192.168.100.53:8080/api/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));
    homePageData();
}, []);

  return (
    <View style={styles.container}>
      <MainHeader title="InternCollab App" />
      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Job" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={data} />
        <SectionHeader
          title="Popular Jobs"
          buttonTitle="See All"
          // onPress={() => {
          //   navigation.navigate("TripDetails")
          // }}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default HomeScreen;
