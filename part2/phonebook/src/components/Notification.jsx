const styleSuccess = {
    color: 'green',
    borderColor: 'green'
}

const styleError = {
    color: 'red',
    borderColor: 'red'
}

export const Notification = ({message, success=true}) => {
    if(!message)
        return null
  
    return (
    <div className='notification' style={success ? styleSuccess : styleError}>
        {message}
    </div>
  )
}
