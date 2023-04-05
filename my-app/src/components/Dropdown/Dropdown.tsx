import "../../components/Dropdown/Dropdown.css";
import { useState } from "react";
import Button from "../Button"

export default function Dropdown(props:{ selectChange: any, selectedOption: any, comics: any }) {

      return (
        <div className="dropdown-container">
        <select onChange={props.selectChange} className="selectList" id="selectListCharacters">
          {props.comics.map((comic: any) => {
           return <option key={comic.id} value={comic.name}>{comic.characters.items.map((character: any) => {
            return character.name;
          })}</option>;
        })}
       </select>
        <select onChange={props.selectChange} className="selectList" id="selectListCreators">
          {props.comics.map((comic: any) => {
           return <option key={comic.id} value={comic.name}>{comic.creators.items.map((creator: any) => {
            return creator.name;
          })}</option>;
        })}
       </select>
        </div>
      );
    };