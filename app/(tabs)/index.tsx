import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
const Home = () => {
  const suggestList = [
    {
      name: "Cappuccino",
    },
    {
      name: "Machiato",
    },
    {
      name: "Latte",
    },
    {
      name: "Americano",
    },
  ];

  const categories = [
    {
      img: "@/assets/images/coffee1.png",
      rating: 3.2,
      title: "Cappucino",
      desc: "with Chocolate",
      price: 1.2,
    },
    {
      img: "@/assets/images/coffee2.png",
      rating: 3.4,
      title: "Cappucino",
      desc: "with Oat Milk",
      price: 4.5,
    },
    {
      img: "@/assets/images/coffee3.png",
      rating: 4.4,
      title: "Cappucino",
      desc: "with Chocolate",
      price: 3.1,
    },
    {
      img: "@/assets/images/coffee4.png",
      rating: 5.2,
      title: "Cappucino",
      desc: "with Oat Milk",
      price: 4.8,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: "34%",
          backgroundColor: "#131313",
          padding: 30,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "#DDDDDD", marginVertical: 4 }}>
              Location
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: 600 }}>
                Jakarta, Indonesia
              </Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("@/assets/images//User.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 22,
            alignItems: "center",
            backgroundColor: "#313131",
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 16,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <AntDesign
              style={{ marginLeft: 14 }}
              name="search1"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TextInput
            style={{
              paddingHorizontal: 8,
              color: "#DDDDDD",
              width: "78%",
              height: "100%",
            }}
            placeholder="Search Coffee"
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#C67C4E",
              padding: 8,
              borderRadius: 12,
              marginRight: 4,
            }}
          >
            <Ionicons name="list-outline" size={26} color="white" />
          </TouchableOpacity>
        </View>
        <Image
          style={{ alignSelf: "center", width: 315, height: 140 }}
          source={require("@/assets/images//Frame.png")}
        />
      </View>
      <View style={{
          marginTop: 60,
          height: "40",
          paddingBottom: 220,
        }}
      >
        <FlatList
          style={{ paddingVertical: 12 }}
          contentContainerStyle={{ paddingRight: 32 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={suggestList}
          renderItem={({ item }) => (
            <View style={{ left: 18 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 12,
                  marginHorizontal: 12,
                  borderRadius: 12,
                  height: 40,
                  padding: 12,
                }}
              >
                <Text style={{ color: "#2F4B4E" }}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              // onPress={() => navigation.navigate("Detail")}
              style={{
                marginVertical: 6,
                marginLeft: 26,
                backgroundColor: "white",
                padding: 4,
                borderRadius: 18,
              }}
            >
              <Image style={{ width: 141, height: 132 }} source={require("@/assets/images/coffee1.png")} />
              <View style={{ marginTop: 4, padding: 4 }}>
                <Text style={{ fontWeight: 700, fontSize: 20 }}>
                  {item.title}
                </Text>
                <Text
                  style={{ fontSize: 14, color: "grey", marginVertical: 4 }}
                >
                  {item.desc}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#2F4B4E", fontWeight: 700, fontSize: 22 }}
                  >
                    $ {item.price}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#C67C4E",
                      paddingVertical: 8,
                      paddingHorizontal: 13,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 12,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: 600,
                      }}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});