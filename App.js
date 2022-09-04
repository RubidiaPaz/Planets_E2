import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, Image} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Mercurio",
    src: require('./assets/img/mercurio.jpg'),
    text: "Planeta del sistema solar más cercano al Sol y el más pequeño"
  },
  {
    id: "2",
    title: "Venus",
    src: require('./assets/img/venus.jpg'),
    text: "Segundo planeta mas proximo al Sol y más cálido del sistema solar"
  },
  {
    id: "3",
    title: "La Tierra",
    src: require('./assets/img/tierra.jpg'),
    text: "Tercer planeta mas proximo al Sol y más denso de todo el Sistema Solar"
  },
  {
    id: "4",
    title: "ISS",
    src: require('./assets/img/estacion.jpg'),
    text: "Estacion espacial situada en la orbita terrestre baja"
  },
  {
    id: "5",
    title: "Luna",
    src: require('./assets/img/luna.webp'),
    text: "El unico satélite natural de la Tierra"
  },
  {
    id: "6",
    title: "Marte",
    src: require('./assets/img/marte.jpg'),
    text: "Conocido como el planeta Rojo, es el más alejado del Sol de los cuatro planetas rocosos del sistema solar"
  },
  {
    id: "7",
    title: "Jupiter",
    src: require('./assets/img/jupiter.jpg'),
    text: "Planeta más grande del sistema solar y el quinto en orden de lejanía al Sol."
  },
  {
    id: "8",
    title: "Saturno",
    src: require('./assets/img/saturno.png'),
    text: "Sexto planeta del sistema solar y el único con un sistema de anillos visible desde la Tierra"
  },
  {
    id: "9",
    title: "Urano",
    src: require('./assets/img/urano.jpg'),
    text: "Séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo."
  },
  {
    id: "10",
    title: "Neptuno",
    src: require('./assets/img/neptuno.jpg'),
    text: "Es oscuro, frío y muy ventoso. Es el octavo planeta de nuestro sistema solar"
  },
  
  {
    id: "11",
    title: "Pluton",
    src: require('./assets/img/pluton.jpg'),
    text: "Planeta enano del sistema solar situado a continuación de la órbita de Neptuno"
  },
  {
    id: "12",
    title: "",
    text: ""
  }
];

const Item = ({ title, img, text}) => (
  <View style={styles.opciones}> 
    <Image style={styles.img} source={img}></Image>
    <View style={styles.descripcion}>
    <Text style={styles.item}>{title}</Text>
    <Text style={styles.texto}>{text}</Text>
    </View>
  </View>
  
);


export default function App() {
  const renderItem = ({ item }) => 
  <Item title={item.title}  img={item.src} text={item.text}/>;

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.sectionHeader}>Espacio</Text>
      <View style={{backgroundColor: "#020202" }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </View>
    </SafeAreaView>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  img:{
    width:125,
    height: 125,
    justifyContent:'flex-start'
  }
});*/

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 25,
   
  },
  item: {
    padding: 5,
    color: "white",
    fontSize: 25,
    height: 44,
    fontWeight:'bold'
  },
  opciones:{
    flexDirection:"row",
    padding:10,
    height:150
  },
  img:{
    width:100,
    height: 100,
    justifyContent:'flex-start'
  },
  texto: {
    margin: 10,
    color: "white",
    fontSize: 16,
    height: 100,
    marginRight:90
  },
  descripcion:{
    flexDirection:"column",
    margin:10,
  },
  sectionHeader: {
    fontSize: 35,
    backgroundColor: '#647973',
    color: 'white',
    fontWeight:'bold',
    fontStyle:'nunito',
    padding: 20,
  },
});
