import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import shopBanner from "../assets/shop/shopBanner.jpg";
import FoodCard from "../components/FoodCard";
import useMenu from "../hooks/useMenu";
import Cover from "../Shared/Cover";

const Order = () => {
  const categories = ["salad", "pizza", "dessert", "soup", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);

  // const [tabIndex, setTabIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  

  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Order - Bistro Boss Restaurant</title>
      </Helmet>
      <Cover
        img={shopBanner}
        title={"Order food"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <div className="my-10 w-11/12 md:max-w-screen-lg mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>DESSERT</Tab>
            <Tab>SOUP</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          {/* Salad item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>

          {/* PIZZA item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>

          {/* DESSERT item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
              {dessert.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>

          {/* Soup item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>

          {/* drinks item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
