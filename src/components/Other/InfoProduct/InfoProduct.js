import { Text, TouchableOpacity, View, Image, ScrollView, Dimensions } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import Rating from '../Rating/Rating';

export default class InfoProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataTemp: [],
    };
  }

  async getProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      this.setState({ data: json.products });
      this.dataTemp = json.products;
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

    const newData = this.dataTemp.filter(data => data.id == this.props.route.params.id)

    this.setState({ data: newData })
  }

  componentDidMount() {
    this.getProducts();
  }

  state = {
    active: 0
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        {
          data.map((item, index) => (
            <View style={styles.viewImage} key={index}>
              <ScrollView
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={this.change}
                style={styles.scrollView}
              >
                {
                  item.images.map((image, index) => (
                    <Image
                      key={index}
                      source={{ uri: image }}
                      style={styles.image}
                    />
                  ))
                }
              </ScrollView>

              <TouchableOpacity style={styles.btnBack} onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../../../image/arrowLeftv2.png')}
                  style={styles.iconArrow}
                />
              </TouchableOpacity>

              <View style={styles.dotView}>
                {
                  item.images.map((i, k) => (
                    <Text key={k} style={k == this.state.active ? styles.dotActive : styles.dotNotActive}>●</Text>
                  ))
                }
              </View>
            </View>
          ))
        }
        {
          data.map((item, index) => (
            <View style={styles.info} key={index}>
              <View style={styles.info1}>
                <Text style={styles.textNamevsPrice}>{item.title}</Text>
                <Text style={styles.textNamevsPrice}>${item.price}</Text>
              </View>
              <View style={styles.info1}>
                <View style={styles.info3}>
                  <Rating rating={item.rating} />
                  <Text style={styles.textAll}>{item.rating}</Text>
                </View>
                <Text style={styles.textAll}>Đã bán: {item.stock}</Text>
              </View>
              <View style={styles.info1}>
                <Text style={styles.textDecription}>{item.description}</Text>
              </View>
              <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.textBtn}>ADD TO BAG</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    )
  }
}