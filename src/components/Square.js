import '../index.css';


export default function Square({value, onClick}) {
    return (
        <>
            <button className="square" onClick={onClick}>
                <span className={value === 'O' ? 'circle' : 'ex'}>{value}</span>
            </button>   
        </>
    )
}