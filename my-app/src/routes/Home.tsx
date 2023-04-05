import TextBox from "../components/TextBox/TextBox";
import FilterBar from "../components/FilterBar/FilterBar";
import ComicCard from "../components/ComicCard/ComicCard";
import { useState, useEffect } from "react";

import { fetchComics } from "../utils/utils";
const IMG_FANTASTIC = "portrait_fantastic";



type comics = {
  id: number;
  title: string;
  issuseNumber: number;
  creators: object;
  characters: object;
  name: string;
  thumbnail: any;
  items: any;
};



export default function Home() {
    const [comics, setComics] = useState<comics[]>([]);
    const [error, setError] = useState();
    const [selectedOption, setSelectedOption] = useState<String>();
    
    // const characters = [
    //   {name : "Crusher Hogan (Ultimate)", id: 1014991},
    //   {name : "Apocalypse", id: 1009156},
    //   {name : "Blink", id: 1009197},
    //   {name : "Blob", id: 1009199},
    //   {name : "Storm", id: 1009629},
    //   {name : "Magento", id: 1009417},
    // ]

    let cards: any;
    window.onload = async ( args: any) => {
      if (args === "") return;
      try {
        return await fetchComics();
      } catch (err) {
        return err;
      }
    };
      console.log(data, "onload");
  

    const selectChange = async (event: any, args: any) => {
      const value = event.target.value;
      setSelectedOption(value);
      event.preventDefault();
      if (args === "") return;
  
      try {
        return await fetchComics();
      } catch (err) {
        return err;
      }
    };
    cards = comics.map ((comic: any) => (
      console.log(comic)

    ))


    // const handleClick = async (e: any, args:any) => {
    //   e.preventDefault();
    //   if (args === "") return;
  
    //   try {
    //     return await fetchComics();
    //   } catch (err) {
    //     return err;
    //   }
    // };


  return (
    <>
        <TextBox />
        <FilterBar  setComics={setComics} setError={setError} selectChange={selectChange} selectedOption={selectedOption} comics={comics} />
        <div className="container">
        {comics.map((comic: any) => (
          <ComicCard
            title={comic.title}
            key={comic.id}
            id={comic.id}
            issueNumber={comic.issueNumber}
            creators={comic.creators.items.map((creator: any) => {
              return creator.name;
            })}
            thumbnail={`${comic.thumbnail.path}/${IMG_FANTASTIC}.${comic.thumbnail.extension}`}
            />
            ))}
        </div>
    </>
  );
}