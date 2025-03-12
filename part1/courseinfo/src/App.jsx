const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.part[0]} {props.exercise[0]}
      </p>
      <p>
        {props.part[1]} {props.exercise[1]}
      </p>
      <p>
        {props.part[2]} {props.exercise[2]}
      </p>
    </>
  )
} 

const Total = (props) => {
  return (
     <>
      <p>Number of exercises {props.total}</p>
     </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [ 10, 7, 14]                           
  
  return (
    <div>
      <Header course={course} />
      <Content part={parts} exercise={exercises} />
      <Total total={exercises[0] + exercises[1] + exercises[2] } />
    </div>
  )
}

export default App