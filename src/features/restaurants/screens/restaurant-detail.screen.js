import React, { useState } from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.components";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnedExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Banana Bread" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Pasta" />
          <List.Item title="Hamburger" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnedExpanded}
          onPress={() => setDinnerExpanded(!dinnedExpanded)}
        >
          <List.Item title="Rice and Oats" />
          <List.Item title="Tacos" />
          <List.Item title="Mushroom soup" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Mocktail" />
          <List.Item title="Lemonaid" />
          <List.Item title="Coke" />
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
