import { useState } from 'react'

const Title = ({ text }) => <h1>{ text }</h1> 

const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    { text }
  </button>
)

const StatisticLine = ({ name, value }) => <div>{name} {value}</div>

const Statistics = (props) => {
  
  const { good, neutral, bad } = props
  
  const total = good + neutral + bad
  const average = total ? (good - bad) / total : 0
  const positive = total ? good / total * 100 : 0
  
return (
    <>
      <StatisticLine name='good' value={good} />
      <StatisticLine name='neutral' value={neutral} />
      <StatisticLine name='bad' value={bad} />
      <StatisticLine name='all' value={total} />
      <StatisticLine name='average' value={average} />
      <StatisticLine name='positive' value={positive +' %'} />
    </>
  )
 }

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
      {
        good || neutral || bad
        ? <Statistics good={good} neutral={neutral} bad={bad} />
        : <p>No feedback given</p>
      }
    </div>
  )
}

export default App