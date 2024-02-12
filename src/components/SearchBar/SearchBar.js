import React from "react";

import {

    View,
    TextInput,

} from 'react-native';

import styles from './SearchBar.style'


// const handleSearch = (text) => {

//     const searchText = text.toLowerCase();
//     const filteredProducts = products.filter((products) =>{
//         product.title.toLowerCase().includes(searchText);
//     });

//     setFilteredProducts(filteredProducts); // Filtrelenmiş ürünleri durum olarak ayarla

// };

const SearchBar = () => {

    return(
        <View style={styles.inputParent}>
        <TextInput
          style={styles.searchBar}
          placeholder='Ara...'
        //   onChangeText={handleSearch}
        >
        </TextInput>
      </View>
    );


};

export default SearchBar;