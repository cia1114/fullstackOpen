

export const SearchForm = ({search, handleOnSubmit, handleOnChange}) => {
  return (
    <form onSubmit={handleOnSubmit } >
        <label htmlFor="conuntries">find countries: </label>
        <input type="text" name="countries" value={search} onChange={handleOnChange}/>
    </form>
  )
}
