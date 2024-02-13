import React from "react";

import {

    View,
    TextInput,
    TouchableOpacity,


} from 'react-native';

import styles from './SearchBar.style'


 const handleSearch = (text) => {
    


 };

const SearchBar = () => {

    return(
        <View style={styles.inputParent}>

        <TextInput
          style={styles.searchBar}
          placeholder='Ara...'
          onChangeText={(input) => handleSearch(input)}
        >
        </TextInput>
      </View>
    );


};

export default SearchBar;