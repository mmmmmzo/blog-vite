import React from 'react';
import "./Main.css";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function Main({ activeNote, onUpdateNote }) {
    const onEditNote = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            modDate: Date.now(),
        })
    }
    if (!activeNote) {
        return <div className='no-active-note'>
            <ol>
                <li>追加ボタンでコンテンツを増やす</li>
                <li>デフォルトのコンテンツが出来る</li>
                <li>コンテンツ選択⇒内容のリアルタイム変更</li>
            </ol>

        </div>
    }
    return (
        <div className='app-main'>
            <div className='app-main-note-edit'>
                <input
                    id="title"
                    type="text"
                    value={activeNote.title}
                    onChange={(e) => onEditNote("title", e.target.value)}
                />
                <textarea
                    id="content"
                    placeholder='編集＆更新内容が反映される。Markdownが使える。'
                    value={activeNote.content}
                    onChange={(e) => onEditNote("content", e.target.value)}
                ></textarea>
            </div>
            <div className='app-main-note-preview'>
                ▼こちらに反映
                <h1 className='preview-title'>{activeNote.title}</h1>
                <ReactMarkdown className='markdown-preview'>
                    {activeNote.content}
                </ReactMarkdown>
            </div>
        </div >
    )
}

export default Main