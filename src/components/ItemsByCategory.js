import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";


import styled from "styled-components";
import fetchGetAllItemsByCategory from "../utils/Items/fetchGetAllItemsByCategory";
import fetchEditOneWishlist from "../utils/Users/fetchEditOneWishlist";
import fetchGetOneUserWishlist from "../utils/Users/fetchGetOneUserWishlist";
import SortForm from "../components/SortForm";

export default function ItemsByCategory() {
  const [items, setItems] = useState();
  const [sorted, setSorted] = useState();
  const [wishlist, setWishlist] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  const userId = localStorage.getItem("user_id")

  useEffect(() => {
    async function fetchItemsByCategory() {
      const data = await fetchGetAllItemsByCategory(category);
      const wishList = userId ? (await fetchGetOneUserWishlist(userId)) : [] 
      setWishlist(wishList);
      setItems(data);
      setSorted(data);
      setIsLoading(false);
    }
    fetchItemsByCategory();
  }, [category]);



  const WishlistIcon = ({ item }) => {
    const [lightMode, setLightMode] = useState(wishlist.includes(item.id));
    if(userId === null)
    {
      return;
    }
    else{
    return (
      <img
        onClick={async () => {
          setLightMode((prevMode) => !prevMode);
          await fetchEditOneWishlist(userId, item.id);
        }}
        src={
          lightMode
            ? "https://www.svgrepo.com/show/159717/heart.svg"
            : "https://www.svgrepo.com/show/25921/heart.svg"
        }
        alt="Wishlist button"
      ></img>
    );
      }
  };

  async function sortItems(items, sortOption) {
    // console.log(items)
    console.log(sortOption)
    
    const sortedItems = [...items].sort((a, b) => {
      switch (sortOption) {
        // name low to high
        case "az":
          return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;

          
          
          break;
        // Name high to low
        case "za":
          return a.name.toUpperCase() <  b.name.toUpperCase() ? 1 : -1;
          break;
        // Price high to low
        case "expensive":
          return b.price - a.price
          break;
        // Price low to high
        case "cheap":
          return a.price - b.price
          
          break;
        
        // Stock high to low
        case "quantity":
            return b.quantity - a.quantity
          break;
      
        // Nothing
        default:
          return;
          break;
      }
    })
    // console.log(sortedItems.length)
    // console.log(sortedItems)
    // return sortedItems;
    setSorted(sortedItems);
}

  async function handleSortChange(e) {
    const sort = e.target.value;
    console.log(sort)
    sortItems(items, sort)
    // alert(sort)


    // sortItems(searchResults, sort)
    // setSortInput(sort)
  }

  if (!isLoading) {
    return (
      <div>
        <SortForm onChange={handleSortChange} />
      <Container>
        {sorted.length > 0 ? sorted.map((item) => (
          <Section key={item.id}>
            <Link to={`/itemInfo/${item.id}`}>
              <SubHeading id={"item-title"}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </SubHeading>
              <Image src={item.image} />
            </Link>
            <Bottom>
              <PTag>£{item.price.toFixed(2)}</PTag>
              <Wishlist id="wishlist">
                <WishlistIcon item={item} />
              </Wishlist>
            </Bottom>
          </Section>
        )): null}
      </Container>
      </div>
    );
  }
}

// Styling

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Section = styled.section`
  background-color: White;
  border-radius: 20px;
  width: 20vw;
  height: 23vw;
  margin: 2vw 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media(max-width:480px) {
    padding: 10px;
    margin-right: 10px;
    flex-direction: row;
    /* flex-wrap: wrap; */
    width: 50vw;
    height: 30vw;
    
  }

  @media (min-width: 481px) and (max-width:1024px){
    padding: 20px;
   width: 40vw;
   height: 30vw;
   
   flex-direction: row;
  }

  @media (min-width: 1025px) and (max-width: 1999px){
    width: 30vw;
  }
`;

const SubHeading = styled.h3`
  font-size: 28px;
  height: 5vw;
  margin-top: 30px;
  margin-bottom: 0px;
  text-align: center;
`;

const Image = styled.img`
  // width: 15vw;
  height: 10vw;
  align-self: center;
  border-radius: 10px;
`;

const PTag = styled.p`
  display: inline-block;
  margin-left: 0; 
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
`;

const Bottom = styled.div`
  justify-self: baseline;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const Wishlist = styled.button`
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Select = styled.select`
  width: 10vw;
  height: 2vw;
  border-radius: 10px;
  margin-top: 1vw;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 3px;
  transition: all 0.3s ease;

  margin: 25px;

  &:focus {
    border-color: #333;
    outline: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
`;