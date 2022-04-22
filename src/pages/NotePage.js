import React from "react";
import notes from "../assets/data";
import { useParams } from "react-router-dom";

const NotePage = () => {
  let noteId = useParams().id;
  let note = notes.find((note) => note.id == noteId);
  return (
    <div className="note">
      <div className="note-header"></div>
      <textarea value={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
