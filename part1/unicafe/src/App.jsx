import { useState } from 'react'

const Title = ({ text }) => <h1>{ text }</h1> 

const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    { text }
  </button>
)

const Statistic = ({ name, value }) => <div>{name} {value}</div>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = 'give feedback'
  const subtitle = 'statistics'

  const handleClickonGood = () => setGood(good + 1)
  const handleClickonNeutral = () => setNeutral(neutral + 1)
  const handleClickonBad = () => setBad(bad + 1)

  return (
    <div>
      <Title text={title} />
      <div>
        <Button onClick={handleClickonGood} text='good' />
        <Button onClick={handleClickonNeutral} text='neutral' />
        <Button onClick={handleClickonBad} text='bad' />
      </div>
      <Title text={subtitle} />
      <Statistic name='good' value={good} />
      <Statistic name='neutral' value={neutral} />
      <Statistic name='bad' value={bad} />
    </div>
  )
}

export default App