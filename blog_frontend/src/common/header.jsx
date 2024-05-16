import { useNavigate } from 'react-router-dom';

import './css/header.css';

function Header() {
  const navigateTo = useNavigate()

  const handleClick = (event) =>{
    event.preventDefault()

    navigateTo('/login')
  }

  return (
    <header className="header">
      <div className="logo">Django React Blog</div>
      <button className="sign-in-btn" onClick={handleClick}>Sign In</button>
    </header>
  );
}

export default Header;