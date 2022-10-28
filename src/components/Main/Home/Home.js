import { ActivityIndicator, FlatList, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import CardAndChat from "../CartAndChat/CartAndChat.js"
import styles from './Style.js'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataTemp: [],
      isLoading: true,
      text: '',
      arrayholder: []
    };
  }

  async getProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      this.setState({ data: json.products });
      this.arrayholder = json.products;
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

    const newArrayList = [];
    this.arrayholder?.forEach(obj => {
      if (!newArrayList.some(o => o.category === obj.category)) {
        newArrayList.push({ ...obj });
      }
    });

    this.setState({ dataTemp: newArrayList })
  }


  componentDidMount() {
    this.getProducts();
  }

  onChangeText(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  }

  filterCategory(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.category.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  }

  render() {
    const { data, isLoading, dataTemp } = this.state;
    const navigation = this.props.navigation

    return (
      <View style={styles.container}>
        <View style={styles.contain}>
          <View style={styles.SectionStyle}>
            <Image source={require('../../../../image/search.png')} style={styles.ImageStyle} />
            <TextInput
              style={styles.input}
              placeholder="Tìm kiếm sản phẩm"
              underlineColorAndroid="transparent"
              onChangeText={text => this.onChangeText(text)}
            />
          </View>
          <View>
            <CardAndChat />
          </View>
        </View>
        <View style={styles.containerv1}>
          <View>
            {isLoading ? <ActivityIndicator /> : (
              <FlatList
                data={dataTemp}
                keyExtractor={({ id }, index) => id}
                horizontal={true}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.categori} onPress={() => this.filterCategory(item.category)}>
                    <Text style={styles.textCategory}>{item.category}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </View>
        <View style={styles.containerv2}>
          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => navigation.navigate('InfoProduct', { data: data, id: item.id })}
                >
                  <Image source={{ uri: item.thumbnail }} style={styles.Image} />
                  <View style={styles.discout}>
                    <Text style={styles.textDiscount}>41%</Text>
                    <Text style={styles.textGIAM}>GIẢM</Text>
                  </View>
                  <View style={styles.info}>
                    <Text numberOfLines={1} style={styles.textName}>{item.title}</Text>
                    <View style={styles.info1}>
                      <Text style={styles.textPrice}>${item.price}</Text>
                      <Text style={styles.textAvailable}>Đã bán {item.stock}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    )
  }
}
