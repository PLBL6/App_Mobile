import { Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import { getDanhmuc_IDnhacungcap } from '../../../../../api/nhacungcap';
import ImageCategory from '../../../ListImage/ImageCategory';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      imageCategory: []
    };
  }

  async getCategory() {
    try {
      this.setState({ data: await getDanhmuc_IDnhacungcap(this.props.route.params.idNhacungcap) });
      this.setState({ imageCategory: ImageCategory() })
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getCategory();
  }

  render() {
    const { data, isLoading, imageCategory } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item}>
                <View style={styles.item1}>
                  <Image source={imageCategory[item.id - 1]} style={styles.image} />
                  <View style={styles.info}>
                    <Text style={styles.textName}>{item.tenDanhMuc}</Text>
                    <Text style={styles.textNumber}>10 sản phẩm</Text>
                  </View>
                </View>
                <Image source={require('../../../../../image/arrowRightBlack.png')} style={styles.iconArrow} />
              </TouchableOpacity>
            )}
          />
        )}

        <TouchableOpacity style={styles.item}>
          <View style={styles.infoTotal}>
            <Text style={styles.textName}>Sản phẩm</Text>
            <Text style={styles.textNumber}>1103 sản phẩm</Text>
          </View>
          <Image source={require('../../../../../image/arrowRightBlack.png')} style={styles.iconArrow} />
        </TouchableOpacity>
      </View>
    )
  }
}