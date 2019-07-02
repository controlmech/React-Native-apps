import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const CustomHeader = ({ navigation }) => (
  <View style={[styles.container, {backgroundColor: global.colors.bColor, borderBottomColor: global.colors.aColor}]}>
    <Ionicons style={[styles.menu, {backgroundColor: global.colors.bColor, color: global.colors.tColor}]}
      name="md-menu"
      size={30}
      onPress={() => navigation.openDrawer()}
    />
    <Text style={[styles.text, {color: global.colors.tColor}]}>
      {global.colors.title}
    </Text>
  </View>
);

export default CustomHeader;