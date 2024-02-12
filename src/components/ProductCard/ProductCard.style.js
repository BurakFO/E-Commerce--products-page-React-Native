import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    productList: {
        height: windowHeight,
   
    },

    productCards: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ebeff1',
        height: windowHeight / 3,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 7,
        borderRadius: 10,
    },

    productImage: {
        flex: 8,
        borderRadius: 10,
        marginBottom: 5,

    },

    productTitle: {
        // flex: 1, if we don't remove it, then the title extend right side which is out of the screen.
        fontSize: 17,
        fontWeight: 'bold',

    },

    productPrice: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#808080',

    },

    productStock: {
        color: 'red',
        fontWeight: 'bold',
    },
});