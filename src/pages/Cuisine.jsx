import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Children } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
// import { AnimatePresence } from "framer-motion/dist/framer-motion";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=fcacea56258149b9a9fc1de729daa7b8&number=9&cuisine= ${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    // getCuisine();
    console.log(params);
  }, []);
  return <div>Cuisine</div>;
}

export default Cuisine;
