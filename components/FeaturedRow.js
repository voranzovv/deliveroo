import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurentCard from "./RestaurentCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs  px-4 text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* restaurant cards  */}
        <RestaurentCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address={"123 Main St"}
          short_description={"this is a test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurentCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address={"123 Main St"}
          short_description={"this is a test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurentCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address={"123 Main St"}
          short_description={"this is a test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
