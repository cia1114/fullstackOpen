import Header from './Header'

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

const Total = ({value}) => <p><strong>total of {value} exercises</strong></p>

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

export default Course