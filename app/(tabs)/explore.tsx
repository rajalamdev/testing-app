import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialIcons,
  Feather,
  Foundation,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

const Order = () => {
  const [value, setValue] = useState(0);
  return (
    <SafeAreaView>
      <View style={{ paddingVertical: 12, paddingHorizontal: 32 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 22,
          }}
        >
          <TouchableOpacity
            style={{ width: 20 }}
            // onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 110, fontSize: 22, fontWeight: 700 }}>
            Order
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              marginBottom: 22,
              marginTop: 12,
              flexDirection: "row",
              backgroundColor: "#ebebeb",
              padding: 4,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 14,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#C67C4E",
                paddingHorizontal: 48,
                paddingVertical: 12,
                borderRadius: 14,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
                Deliver
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 48,
                paddingVertical: 12,
                borderRadius: 14,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 600, color: "grey" }}>
                Pick Up
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
            Delivery Address
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            Jl. Kpg Sutoyo
          </Text>
          <Text style={{ color: "#808080" }}>
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
          </Text>
          <View
            style={{
              paddingBottom: 22,
              marginVertical: 16,
              flexDirection: "row",
              borderBottomWidth: 0.3,
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderRadius: 16,
                borderWidth: 0.3,
              }}
            >
              <FontAwesome name="edit" size={18} color="#303336" />
              <Text style={{ marginLeft: 4, color: "#303336" }}>
                Edit Address
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: 12,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderRadius: 16,
                borderWidth: 0.3,
              }}
            >
              <Foundation name="clipboard-notes" size={18} color="#303336" />
              <Text style={{ marginLeft: 4, color: "#303336" }}>Add Notes</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 12,
              borderBottomWidth: 0.3,
            }}
          >
            <Image
              style={{ width: 60, height: 58 }}
              source={require("@/assets/images/coffee1.png")}
            />
            <View style={{ padding: 12, marginRight: 22 }}>
              <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>
                Cappucino
              </Text>
              <Text style={{ color: "#808080" }}>with Chocolate</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (value > 0) {
                  setValue(value - 1);
                }
              }}
              style={{
                borderWidth: 0.3,
                borderRadius: 30,
                paddingVertical: 4,
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontWeight: 600, fontSize: 16 }}>-</Text>
            </TouchableOpacity>
            <Text
              style={{ paddingHorizontal: 12, fontWeight: 600, fontSize: 16 }}
            >
              {value}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setValue(value + 1);
              }}
              style={{
                borderWidth: 0.3,
                borderRadius: 30,
                paddingVertical: 4,
                paddingHorizontal: 9,
              }}
            >
              <Text style={{ fontWeight: 600, fontSize: 16 }}>+</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 22,
              borderRadius: 16,
              borderWidth: 0.4,
              flexDirection: "row",
              padding: 12,
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#C67C4E",
                borderRadius: 19,
                padding: 6,
                marginRight: 8,
              }}
            >
              <Feather name="percent" size={14} color="white" />
            </View>
            <Text style={{ fontWeight: 700 }}>1 Discount is applied</Text>
            <TouchableOpacity style={{ position: "absolute", right: 12 }}>
              <AntDesign name="right" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>
              Payment Summary
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 8,
              }}
            >
              <Text style={{ fontWeight: 500, color: "#2F2D2C" }}>Price</Text>
              <Text style={{ fontSize: 15, fontWeight: 600 }}>$ 4.53</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 0.3,
                paddingBottom: 12,
              }}
            >
              <Text style={{ fontWeight: 500, color: "#2F2D2C" }}>
                Delivery Fee
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 15, fontWeight: 500, color: "#2F2D2C" }}
                >
                  $2.0
                </Text>
                <Text style={{ fontSize: 15, fontWeight: 600 }}> $1.0</Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: 8,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: 500, color: "#2F2D2C" }}>
                Total Payment
              </Text>
              <Text style={{ fontSize: 15, fontWeight: 600 }}>$5.53</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          top: -20,
          height: "30%",
          marginTop: 18,
          paddingVertical: 12,
          paddingHorizontal: 34,
          borderTopRightRadius: 22,
          borderTopLeftRadius: 22,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 12,
          }}
        >
          <Ionicons name="logo-android" size={24} color="#C67C4E" />
          <View
            style={{
              marginLeft: 12,
              borderRadius: 18,
              backgroundColor: "#f5f5f5",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#C67C4E",
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 12,
              }}
            >
              <Text style={{ color: "white" }}>Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderRadius: 12,
              }}
            >
              <Text> $5.53</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 2,
              backgroundColor: "grey",
              borderRadius: 19,
              padding: 2,
            }}
          >
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={18}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            alignItems: "center",
            padding: 22,
            backgroundColor: "#C67C4E",
            borderRadius: 18,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700, color: "white" }}>
            Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({});