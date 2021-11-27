import React from 'react'
import Square from './Square';

export default function Board({squares, onClick}) {
    return (
        <div className="container">
        {
            squares.map((s, index) => (
                <Square value={s} key={`${s+index}`} onClick={() => onClick(index)}/>
            ))
        }
        </div>
    )
}
