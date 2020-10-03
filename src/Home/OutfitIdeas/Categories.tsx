import React from "react";
import { ScrollView, View } from "react-native";
import Category from "./Category";

interface CategoriesProps {}

const categories = [
  {
    id: "newin",
    title: "New In",
    color: "#FFE8E9",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#F1E0FF",
  },
  {
    id: "activewear",
    title: "Active Wear",
    color: "#BFEAF5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#F1E0FF",
  },
  {
    id: "accessories",
    title: "Accessories",
    color: "#FFE8E9",
  },
];

const Categories = ({}: CategoriesProps) => {
  return (
    <View style={{ alignItems: "center" }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
