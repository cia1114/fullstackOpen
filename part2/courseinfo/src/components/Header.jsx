const Header = ({text, tag}) => tag === 'h1' ? <h1>{text}</h1> : <h2>{text}</h2>

export default Header