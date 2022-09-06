import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDoubleDownIcon,
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  //   SearchIcon,
  //   AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "./../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">HomeScreen</Text>
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current location</Text>
          <ChevronDownIcon size={20} color="#00CCBB" />
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row space-x-2 items-center mx-4 pb-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon color={"gray"} size={20} />
          <TextInput
            placeholder="restaurents and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
        <View></View>
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* categories  */}
        <Categories />

        {/* Featured  */}
        <FeaturedRow
          title="Featured"
          description="Paid placement from out partners"
          id="1"
        />
        {/* Featured  */}
        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
          id="2"
        />
        {/* Featured  */}
        <FeaturedRow
          title="Offers near you!"
          description="Why not support your local restaurant tonight"
          id="3"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
