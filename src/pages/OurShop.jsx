import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import shopBanner from "../assets/shop/shopBanner.jpg";
import useMenu from "../hooks/useMenu";
import Cover from "../Shared/Cover";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Cover
        img={shopBanner}
        title={"OUR SHOP"}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8">
              {salad.map((item) => (
                <div key={item._id} className="card bg-base-100  shadow-xl">
                  <figure className="">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions">
                      <Link className="btn btn-outline border-0 border-b-4 uppercase">
                        add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* PIZZA item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8">
              {pizza.map((item) => (
                <div key={item._id} className="card bg-base-100  shadow-xl">
                  <figure className="">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions">
                      <Link className="btn btn-outline border-0 border-b-4 uppercase">
                        add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* DESSERT item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8">
              {dessert.map((item) => (
                <div key={item._id} className="card bg-base-100  shadow-xl">
                  <figure className="">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions">
                      <Link className="btn btn-outline border-0 border-b-4 uppercase">
                        add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Soup item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8">
              {soup.map((item) => (
                <div key={item._id} className="card bg-base-100  shadow-xl">
                  <figure className="">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions">
                      <Link className="btn btn-outline border-0 border-b-4 uppercase">
                        add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* drinks item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8">
              {drinks.map((item) => (
                <div key={item._id} className="card bg-base-100  shadow-xl">
                  <figure className="">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions">
                      <Link className="btn btn-outline border-0 border-b-4 uppercase">
                        add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
