import React, { useRef } from "react";
import Button from "../Button"
import Dropdown from "../Dropdown/Dropdown"

export default function FilterBar(props:{ setError: any, setComics: any, selectChange: any, selectedOption: any, comics: any }) {
    return (
      <>
      <Dropdown
        selectChange={(e: any) => {
          props.selectChange(e)
            .then((data: any) => props.setComics(data.data.results))
            .catch((err: any) => props.setError(err));
          }}
          selectedOption={props.selectedOption}
          comics={props.comics}
      />
      {/* <form>
      <Button
        handleClick={(e: any) => {
          props.handleClick(e)
            .then((data: any) => props.setComics(data.data.results))
            .catch((err: any) => props.setError(err));
          }}
      />
    </form> */}
      </>
      );
  }
