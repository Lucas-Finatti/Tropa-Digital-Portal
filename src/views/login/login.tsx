import React from 'react';
import { createGlobalStyle } from 'styled-components';
import CustomInput from '../../components/customInput/CustomInput';
import logo from '../../assets/tropa-digital-logo.png';
import sideImg from '../../assets/side-img.png';
import { useAuth } from '../../auth/authContext';
import { useState } from 'react';
import './login.css';
import { Navigate } from 'react-router-dom';
import { Credentials } from '../../models/session';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Advent Pro', sans-serif;
    /* Adicione outras propriedades de estilo conforme necessário */
  }
`;

const Login: React.FC = () => {
  const { setIsAuthenticated, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const [password, setPassword] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    const storedCredentialsJSON = localStorage.getItem('session');
  
    if (!storedCredentialsJSON) {
      return false;
    }
  
    const storedCredentials: Credentials = JSON.parse(storedCredentialsJSON);
  
    if (email === storedCredentials.email && password === storedCredentials.password) {
      setIsAuthenticated(true);
      setLoginFailed(false); 
    } else {
      setIsAuthenticated(false);
      setLoginFailed(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <GlobalStyles />
      <div className="login">
        <div className="login-container">
          <div className="left">
            <div className='logo-container'>
              <img className='logo' src={logo} alt="Logo" />
              </div>
              <p><a className='span'>Bem Vindo</a> <a className='span1'>ao</a> <span className='span2'>painel</span></p>

              <div>
                {loginFailed && <span style={{ color: 'red', fontSize:'10px', paddingBottom: '5px'}}>Credenciais incorretas.</span>}
              </div>
              <CustomInput
                required={true}
                placeholder="Digite seu e-mail:"
                type="email"
                onChangeValue={handleEmailChange}
              />

              <CustomInput
                required={true}
                placeholder="Digite sua senha:"
                type="password"
                onChangeValue={handlePasswordChange}
              />
              <button className='button-login' onClick={handleLogin}>Acessar</button>
            </div>
          <div className="right">
            <img className='side-img' src={sideImg} alt="Side Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
