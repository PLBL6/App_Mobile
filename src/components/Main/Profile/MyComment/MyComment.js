import { Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import { getAnhDanhgia_byIDDanhgia } from '../../../../../api/danhgias';
import { getDanhgia_byIDKH } from '../../../../../api/danhgias';
import colors from "../../../../../colors/colors"
import Rating from '../../../Other/Rating/Rating';


export default class MyComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            danhgia: [],
            isLoading: true,
        };
    }

    async getComment() {
        try {
            const dataPush = this.state.danhgia
            const id = this.props.route.params.idKH
            const data = await getDanhgia_byIDKH(id)
            await Promise.all(data.map(async (item) => {
                const anh = await getAnhDanhgia_byIDDanhgia(item.id)

                let dataDG = {
                    "rating": item.xepHang,
                    "content": item.noiDung,
                    "ngayTao": item.createdAt,
                    "listAnh": anh
                }
                dataPush.push(dataDG)
            }))
            this.setState({ danhgia: dataPush });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }


    componentDidMount() {
        this.getComment();
    }

    render() {
        const { danhgia, isLoading} = this.state;
        const formatDate = (date) => {
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        };

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
                    <Image
                        style={styles.iconArrow}
                        source={require('../../../../../image/arrowLeft.png')}
                    />
                    <Text style={styles.textTitle}>Đánh giá của tôi</Text>
                </TouchableOpacity>
                <View style={styles.info}>
                    {isLoading ?
                        <View style={styles.ViewLoading}>
                            <ActivityIndicator color={colors.mainHome} size={25} />
                            <Text style={styles.textName}>Đang tải dữ liệu</Text>
                        </View> : (
                            <FlatList
                                data={danhgia}
                                initialNumToRender={10}
                                renderItem={({ item }) => (
                                    <View key={item.id} style={styles.view2}>
                                        <View style={styles.viewBig}>
                                            <View style={styles.rating}>
                                                <Rating rating={item.rating} />
                                            </View>
                                            <Text style={styles.textCommen}>{item.content}</Text>
                                            <FlatList
                                                data={item.listAnh}
                                                horizontal={true}
                                                renderItem={({ item }) => (
                                                    <Image key={item.id} source={{ uri: item.anh }} style={styles.ImageComen} />
                                                )}
                                            />
                                            <Text style={styles.textAll}>{formatDate(new Date(item.ngayTao))}</Text>
                                        </View>
                                    </View>
                                )}
                            />
                        )}
                </View>
            </View>
        )
    }
}