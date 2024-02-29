// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/login/login';
import Home from './views/home/home';
import AuthProvider from './auth/authContext';
import { createGlobalStyle } from 'styled-components';
import infoImg from './assets/infoBox.png';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Lato:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Lato:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
`;

const App: React.FC = () => {
  const sessionData = { email: 'teste@email.com', password: 'senha123' };
  const existingSession = localStorage.getItem('session');

  if (!existingSession) {
    console.log('Criando nova sessão...');
    localStorage.setItem('session', JSON.stringify(sessionData));
  } else {
    console.log('Sessão já existe:', existingSession);
  }

  const inputBoxData = [
    { 
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting..." ,
      subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time:'2min atrás',
      bgImg: infoImg
    },
    { 
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting..." ,
      subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time:'2min atrás',
      bgImg: infoImg
    },
    { 
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting..." ,
      subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time:'2min atrás',
      bgImg: infoImg
    },
    { 
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting..." ,
      subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time:'2min atrás',
      bgImg: infoImg
    },
    { 
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting..." ,
      subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time:'2min atrás',
      bgImg: infoImg
    },
    { 
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting..." ,
      subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time:'2min atrás',
      bgImg: infoImg
    },
    { 
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting..." ,
      subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time:'2min atrás',
      bgImg: infoImg
    },
    { 
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting..." ,
      subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time:'2min atrás',
      bgImg: infoImg
    },
    { 
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting..." ,
      subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      time:'2min atrás',
      bgImg: infoImg
    }
  ];

  if (!localStorage.getItem('inputBoxData')){
    localStorage.setItem('inputBoxData', JSON.stringify(inputBoxData));
  }

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
