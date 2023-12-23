const Game = ({ question, onClickVariant, step, percentage }) => {

    return (
        <div>
            <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
        question.variants.map((text, index) => (
        <li key={text} onClick={() => onClickVariant(index)}>{text}</li>
        ))
        }
      </ul> 
        </div>
    )
}

export default Game
