import { CiDark } from 'react-icons/ci'
import { BsFillMoonFill } from 'react-icons/bs'
import { Header, NavBarContainer } from './'
import { Link } from 'react-router-dom'

interface Props {
  toggleTheme: () => void
  theme: string
}

export default function Navbar({ toggleTheme, theme }: Props) {
  return (
    <Header>
      <NavBarContainer>
        <Link to='/' className='link'><h3>Where in the world?</h3></Link>
        {theme === 'dark'
          ? <button onClick={toggleTheme}> <BsFillMoonFill />{' '}Light Mode </button>
          : <button onClick={toggleTheme}> <CiDark />Dark Mode</button>}
      </NavBarContainer>
    </Header>
  )
}
