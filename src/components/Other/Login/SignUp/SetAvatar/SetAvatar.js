import React, { useState } from 'react';
import {Image, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import styles from './Style';

export default function SetAvatar() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    setImage('../../../../../image/username.png')

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri)` `;
    }
  };

  return (
    <TouchableOpacity style={styles.contain} onPress={pickImage}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </TouchableOpacity>
  );
}