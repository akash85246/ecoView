import Navbar from "../../utils/navbar/navbar";
import "./products.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import backWardIcon from "../../assets/backwardIcon.svg";
import forWardIcon from "../../assets/forwardIcon.svg";
import categoryImg1 from "../../assets/categoryImg1.avif";
import categoryImg2 from "../../assets/categoryImg2.jpg";
import categoryImg3 from "../../assets/categoryImg3.jpg";
import categoryImg4 from "../../assets/categoryImg3.jpg";
import categoryImg5 from "../../assets/categoryImg5.jpg";
import grid from "../../assets/grid.svg";
import list from "../../assets/list.svg";
import ItemCard from "../../utils/cards/itemCard/itemCard";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./products.css";
import CategoryCard from "../../utils/cards/category/categoryCard";
import { useState } from "react";
import ItemList from "../../utils/cards/itemCard/itemList";
import Footer from "../../utils/footer/footer";
export default function Products(props) {
  const [items, setItems] = useState([
    {
      name: "Item 1",
      type: "Type 1",
      cost: "$10",
      image: image1,
      label: "green",
      popularity: "2",
      category: "Clothes",
    },
    {
      name: "Item 2",
      type: "Type 2",
      cost: "$20",
      image: image2,
      label: "green",
      popularity: "3",
      category: "Furnitures",
    },
    {
      name: "Item 3",
      type: "Type 3",
      cost: "$30",
      image: image3,
      label: "green",
      popularity: "1",
      category: "Clothes",
    },
    {
      name: "Item 4",
      type: "Type 4",
      cost: "$30",
      image: image3,
      label: "green",
      popularity: "100",
      category: "Others",
    },
    {
      name: "Item 5",
      type: "Type 5",
      cost: "$30",
      image: image3,
      label: "green",
      popularity: "0",
      category: "Clothes",
    },
  ]);

  const [filterOption, setFilterOption] = useState("none");
  const [itemsDisplay, setItemsDisplay] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState([...items]);

  const filterItemsByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "ALL") {
      setFilteredItems([...items]);
    } else {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };

  const toggleDisplay = (displayMode) => {
    setItemsDisplay(displayMode);
  };
  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption !== filterOption) {
      setFilterOption(selectedOption);

      // Sort the items based on the selected filter option
      const sortedItems = items.slice().sort((a, b) => {
        switch (selectedOption) {
          case "popularity":
            return parseInt(b.popularity) - parseInt(a.popularity);
          case "price-high-low":
            return parseFloat(b.cost.slice(1)) - parseFloat(a.cost.slice(1));
          case "price-low-high":
            return parseFloat(a.cost.slice(1)) - parseFloat(b.cost.slice(1));
          default:
            return 0;
        }
      });

      // Update the filtered items with the sorted list
      setFilteredItems(sortedItems);
    }
  };

  return (
    <div className="ScannerPage">
      <Navbar />
      <section>
        <div className="cauroselContainer">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={3}
            isPlaying={true}
            infinite={true}
            interval={5000}
          >
            <Slider>
              <Slide index={0} className="slide ">
                <div>
                  <img src={image1}></img>
                  <div className="sliderContent">
                    <h1>SUSTAINABLE PRODUCTS</h1>
                    <p>
                      Elevate your shopping experience and the planet with our
                      irresistible range of sustainable products – because style
                      should never cost the Earth!
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide index={1} className="slide">
                <div>
                  <img src={image2}></img>
                  <div className="sliderContent">
                    {/* <h1>SUSTAINABLE PRODUCTS</h1> */}
                    <p>
                      Embrace a greener tomorrow today. Choose eco-friendly
                      products and pave the way for a sustainable future. Every
                      small step towards eco-conscious living makes a
                      significant difference in preserving our planet for
                      generations to come.
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide index={2} className="slide">
                <div>
                  <img src={image3}></img>
                  <div className="sliderContent">
                    <h1>FEATURED PRODUCTS</h1>
                    <p>
                      Discover our curated collection of sustainable essentials,
                      each meticulously crafted to minimize environmental impact
                      without compromising on style or functionality. Embrace
                      eco-conscious living with our featured products, where
                      sustainability meets sophistication.
                    </p>
                  </div>
                </div>
              </Slide>
            </Slider>
            <section className="controlButton">
              <ButtonBack className="backButton">
                <img src={backWardIcon}></img>
              </ButtonBack>
              <ButtonNext className="nextButton">
                <img src={forWardIcon}></img>
              </ButtonNext>
            </section>
          </CarouselProvider>
        </div>
      </section>
      <section className="categories">
        <CategoryCard
          Image={categoryImg1}
          Details="CLOTHES"
          onClick={() => filterItemsByCategory("Clothes")}
        ></CategoryCard>
        <CategoryCard
          Image={categoryImg2}
          Details="FURNITURE"
          onClick={() => filterItemsByCategory("Furniture")}
        ></CategoryCard>
        <CategoryCard
          Image={categoryImg3}
          Details="UTILITY"
          onClick={() => filterItemsByCategory("Utility")}
        ></CategoryCard>
        <CategoryCard
          Image={categoryImg4}
          Details="DECOR"
          onClick={() => filterItemsByCategory("Decor")}
        ></CategoryCard>
        <CategoryCard
          Image={categoryImg5}
          Details="OTHERS"
          onClick={() => filterItemsByCategory("Others")}
        ></CategoryCard>
      </section>
      <section className="ItemControl">
        <h3>showing all 125 item</h3>
        <div>
          <h3>views:</h3>

          <button className="gridButton" onClick={() => toggleDisplay("grid")}>
            <img src={grid}></img>
          </button>
          <button className="listButton" onClick={() => toggleDisplay("list")}>
            <img src={list}></img>
          </button>
        </div>
        <div>
          <div>
            <select
              value={filterOption}
              onChange={handleFilterChange}
              className="filter"
            >
              <option value="none">None</option>
              <option value="popularity">Popularity</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="price-low-high">Price: Low to High</option>
            </select>
          </div>
        </div>
      </section>
      <section className="ItemsListContainer">
        <div className="ItemsList">
          <div
            className={`ItemsList ${
              itemsDisplay === "grid" ? "gridView" : "listView"
            }`}
          >
            {itemsDisplay !== "grid" && (
              <div className="itemListHeading">
                <h1> Product</h1>
                <h1>Name</h1>
                <h1>Type</h1>
                <h1>Cost</h1>
                <h1>label</h1>
              </div>
            )}
            {itemsDisplay === "grid" ? (
              <div className="GridList">
                {filteredItems.map((item, index) => (
                  <div className="gridItem" key={index}>
                    <ItemCard
                      name={item.name}
                      type={item.type}
                      cost={item.cost}
                      image={item.image}
                      label={item.label}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="ItemsList">
                {filteredItems.map((item, index) => (
                  <div className="listItem" key={index}>
                    <ItemList
                      name={item.name}
                      type={item.type}
                      cost={item.cost}
                      image={item.image}
                      label={item.label}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
