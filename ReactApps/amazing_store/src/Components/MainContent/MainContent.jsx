import React from "react";
import SideBar from "./SideBar/SideBar";
import ContentHeader from "./Content_header/Content_header";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "FACE",
          value: [
            "Creams & gels",
            "Patches",
            "Emulsions",
            "Toners",
            "Face cleansing",
            "Make up removal",
            "Scrubs",
            "Peeling",
            "Masks"
          ]
        },
        {
          key: "BODY",
          value: []
        },
        {
          key: "FOOT",
          value: []
        },
        {
          key: "HANDS",
          value: []
        },
        {
          key: "HAIR",
          value: []
        }
      ],
      products: [
        {
          poza:
            "https://cdn.shopify.com/s/files/1/1110/6964/products/0031095-300_grande.jpg?v=1481089978",
          descriere: "Missha All Around Safe Block Sebum Zero Sun",
          pret: "$4.00"
        },
        {
          poza:
            "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/beauty/Innisfree_Green_Tea_Balancing_Cream/Innisfree_Green_Tea_Balancing_Cream_L_1.jpg",
          descriere: "Innisfree Green Tea Balancing Cream",
          pret: "$18.00"
        },
        {
          poza:
            "https://images-na.ssl-images-amazon.com/images/I/31gf5jEz%2BfL._SX355_.jpg",
          descriere: "Claire’s Cloud 9 Blanc De Whitening Cream",
          pret: "$20.00"
        },
        {
          poza:
            "https://media.karousell.com/media/photos/products/2017/12/26/tonymoly_pure_eco_snail_moisture_gel_1514292559_f188317e.jpg",
          descriere: "Tonymoly Pure Eco Snail Moisture Gel",
          pret: "$8.00"
        },
        {
          poza:
            "https://cdn.shopify.com/s/files/1/1452/8808/products/skin79_fresh_garden_mask_snail.jpg?v=1503236267",
          descriere: "Skin79 Fresh Garden Mask - Snail",
          pret: "$2.00"
        },
        {
          poza:
            "https://cdn.shopify.com/s/files/1/0876/7414/products/Advanced_Snail_92_All_in_One_Cream_1024x1024.png?v=1550821867",
          descriere: "Cosrx Advanced Snail 92 All in One Cream",
          pret: "$24.00"
        },
        {
          poza:
            "https://images-na.ssl-images-amazon.com/images/I/41-XoAaF-1L._SY355_.jpg",
          descriere: "Innisfree Canola Honey Mask",
          pret: "$14.00"
        },
        {
          poza:
            "https://images-na.ssl-images-amazon.com/images/I/41dywOO8nmL._SY355_.jpg",
          descriere: "Scinic Honey Banana Cleansing Foam",
          pret: "$4.00"
        }
      ]
    };
  }

  render() {
    return (
      <>
        <SideBar categories={this.state.categories} />;
        <ContentHeader />
        <Filters />
        <Products products={this.state.products} />
      </>
    );
  }
}

export default MainContent;
