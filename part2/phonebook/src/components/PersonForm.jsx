
export const PersonForm = (props) => {
    const {name, phone, handleNewName, handleNewPhone, handleClickAdd} = props
  return (
    <div>
        <form>
            <div>
            name: <input value={name} onChange={handleNewName}/>
            </div>
            <div>number: <input value={phone} onChange={handleNewPhone} />
            </div>
            <div>
            <button type="submit" onClick={handleClickAdd}>add</button>
            </div>
        </form>
    </div>
  )
}
