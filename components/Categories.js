import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import FeaturedRow from "./FeaturedRow";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card  */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
      {/* Featured rows  */}


    </ScrollView>
  );
};

export default Categories;
