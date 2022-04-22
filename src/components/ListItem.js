import React from "react";
import { Link } from "react-router-dom";

let getTitle = (note) => {
  // split by new lines
  const title = note.body.split("\n")[0];

  if (title.length > 30) {
    return title.slice(0, 30);
  }

  return title;
};

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

let getContent = (note) => {
  // get content after title
  let title = getTitle(note);
  let content = note.body.replaceAll("\n", "");
  content = note.body.replaceAll("-", "");
  content = content.replaceAll(title, "");
  if (content.length > 30) {
    return "Activities: " + content.slice(0, 30) + "...";
  }
  return "Activities: " + content;
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getTime(note)}</span>
          {getContent(note)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
