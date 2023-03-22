import React from "react";
import "./Sidebar.css";

const Sidevar = ({
    onAddNote,
    notes,
    onDeleateNote,
    activeNote,
    setActiveNote
}) => {

    const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

    return <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>追加ボタンで記事を追加</h1>
            <button onClick={onAddNote}>追加</button>
        </div>
        <div className="app-sidebar-notes">
            {sortedNotes.map((note) => (
                <div
                    className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                    key={note.id}
                    onClick={() => setActiveNote(note.id)}
                >
                    <div className="app-sidebar-note-title">
                        <b>{note.title}</b>
                        <button onClick={() => onDeleateNote(note.id)}>削除</button>
                    </div>
                    <p>{note.content}</p>
                    <small>{new Date(note.modDate).toLocaleDateString("ja-jp", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}</small>
                </div>
            ))}
        </div>
    </div>;
};

export default Sidevar;