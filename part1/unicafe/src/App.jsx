import { useState } from 'react'

const Title = ({ text }) => <h1>{ text }</h1> 

const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    { text }
  </button>
)

const StatisticLine = ({ name, value }) => <><td>{name}</td><td>{value}</td></>

const Statistics = (props) => {
  
  const { good, neutral, bad } = props
  
  const total = good + neutral + bad
  const average = total ? (good - bad) / total : 0
  const positive = total ? good / total * 100 : 0
  
return (
    <>
      <table>
        <tr><StatisticLine name='good' value={good} /></tr>
        <tr><StatisticLine name='neutral' value={neutral} /></tr>
        <tr><StatisticLine name='bad' value={bad} /></tr>  
        <tr><StatisticLine name='all' value={total} /></tr>  
        <tr><StatisticLine name='average' value={average} /></tr>
        <tr><StatisticLine name='positive' value={positive +' %'} /></tr>
      </table>
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