import React from "react";

import {

    Text,
    View,
    Image,

} from 'react-native';

import styles from './ProductCard.style';

const ProductCard = ({ products }) => {

    return (

        <View style={styles.productCards}>
            <Image style={styles.productImage} source={{
                uri: products.imgURL,
                // height: Dimensions.get('window').height/2,
                // width: Dimensions.get('window').width / 2.5,
                // resizeMode: 'contain',
            }} />
            <Text style={styles.productTitle}>{products.title}</Text>
            <Text style={styles.productPrice} >{products.price}</Text>


            {!products.inStock && (<Text style={styles.productStock}>STOKTA YOK</Text>)}

            {/* {products.inStock ?
                (<Text style={styles.productStock}></Text>)
                :
                (<Text style={styles.productStock}>STOKTA YOK</Text>)
            }
            In here; if 'products.inStock' is true, condition1 will work. If it isn't true; then the condition2 will work.
            
            (condition1) : (condition2)
            */}


        </View>
    );




};


export default ProductCard;