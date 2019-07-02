import React from "react";
import { View } from "react-native";
import { DrawerItems } from "react-navigation";

import styles from "./styles";

const CustomDrawerNavigator = props => (
  <View style={[styles.container]}>
    <DrawerItems
      activeBackgroundColor={global.colors.bColor}
      activeTintColor={global.colors.tColor}
      iconContainerStyle={styles.icons}
      {...props}
    />
  </View>
);

export default CustomDrawerNavigator;