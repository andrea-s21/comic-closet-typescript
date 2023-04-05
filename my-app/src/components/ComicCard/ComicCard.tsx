import { useState, useEffect } from "react";
import "../ComicCard/ComicCard.css";

export default function ComicCard(props:{id: number, thumbnail: any, title: string, issueNumber: number, creators: any }) {

  return (
    <div className="comic-card">
      <p className="card-title">{props.title}</p>
      <span>Issue:</span>
      <p className="card-issue">{props.issueNumber}</p>
      <p className="publish-date">Published: August 31, 2022</p>
      <span>Creators:</span>
      <div className="card-creators">
        <p key={props.creators.id}>{props.creators}</p>
      </div>         
      <img src={props.thumbnail} alt="thumbnail" />
    </div>
  );
}