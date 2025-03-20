const Header = ({text, tag}) => tag === 'h1' ? <h1>{text}</h1> : <h2>{text}</h2>

const Content = ({parts}) => (
  <>
    {
      parts.map(elem => <Part key={elem.id} part={elem} />)
    }
  </>
)

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)


const Course = ({ course }) => {
  const total = course.parts.reduce((sum, elem) => sum + elem.exercises, 0)

  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total value={total} />
    </>
  )
}

const Total = ({value}) => <p><strong>total of {value} exercises</strong></p>

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <>
      <Header text='Web Development Curriculum' tag='h1'/>
      {
        courses.map( (course) => <Course key={course.id} course={course} />)
      }
      
    </>
  )
}
export default App