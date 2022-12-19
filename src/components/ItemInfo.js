import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchGetOneItem from "../utils/Items/fetchGetOneItem";
import ItemDetails from "./ItemDetails";

export default function ItemInfo() {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function fetchOneItem() {
      const data = await fetchGetOneItem(id);
      setItem(data);
      setIsLoading(false);
    }
    fetchOneItem();
  }, [id]);

  if (!isLoading) {
    return <ItemDetails item={item} />;
  }
}
