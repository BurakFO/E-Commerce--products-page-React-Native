import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  
} from 'react-native';




import products_data from './product_data.json';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';



const renderProducts = ({ item }) => <ProductCard products={item} />;


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View>

        <Text style={styles.header}>MIELE STORE</Text>

        <SearchBar/>

        <FlatList
          data={products_data}
          renderItem={renderProducts}
          style={styles.productList}
          numColumns={2}
          ListEmptyComponent={<Text>The list is empty please try again</Text>}
          ListFooterComponent={<Text style={styles.bottomSpace}></Text>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  header: {
    fontSize: 45,
    color: '#800080',
    fontWeight: '500',
    marginLeft: 10,
  },

  bottomSpace:{
    marginTop:90,
  },

});


export default App;