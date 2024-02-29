# Tropa-Digital-Portal

## Projeto Desenvolvido em React

Este é o repositório do projeto Tropa-Digital-Portal, um sistema desenvolvido em React para gestão de conteúdo digital.

## Dependências

O projeto utiliza as seguintes dependências:

- "@testing-library/jest-dom": "^5.17.0"
- "@testing-library/react": "^13.4.0"
- "@testing-library/user-event": "^13.5.0"
- "@types/jest": "^27.5.2"
- "@types/node": "^16.18.83"
- "@types/react": "^18.2.60"
- "@types/react-dom": "^18.2.19"
- "react": "^18.2.0"
- "react-router-dom": "^6.22.1"
- "react-scripts": "5.0.1"
- "styled-components": "^6.1.8"
- "typescript": "^5.3.3"
- "web-vitals": "^2.1.4"

## Scripts

- **start**: Inicia o servidor de desenvolvimento com `react-scripts start`
- **build**: Gera a build de produção com `react-scripts build`
- **test**: Executa testes com `react-scripts test`

## Tela de Login

A aplicação conta com uma tela de login acessível através do seguinte endereço: [http://localhost:3000/login](http://localhost:3000/login). As credenciais padrão para acesso são:

- **E-mail:** teste@email.com
- **Senha:** senha123

## Middleware de Autenticação

O projeto possui um middleware de autenticação que verifica se o usuário está logado antes de permitir o acesso à página principal (home). O código responsável por isso está localizado em um componente chamado `AuthMiddleware`, que utiliza o `useAuth` para obter informações sobre a autenticação.

```javascript
const { isAuthenticated } = useAuth();
const [activeButton, setActiveButton] = useState<keyof ButtonStates>('inicio');

if (!isAuthenticated) {
  return <Navigate to="/login" />;
}
```


## Contexto de Autenticação

O contexto de autenticação é gerenciado pelo componente `AuthProvider`. Ele utiliza o `createContext` do React para prover informações sobre autenticação para toda a aplicação. O hook `useAuth` é disponibilizado para facilitar o acesso a essas informações em componentes específicos.

```javascript
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }
  return context;
};

export default AuthProvider;
```
## Como Utilizar

1. Clone o repositório: `git clone https://github.com/seu-usuario/Tropa-Digital-Portal.git`
2. Instale as dependências: `npm install`
3. Inicie a aplicação: `npm start`

Divirta-se explorando e desenvolvendo no Tropa-Digital-Portal!
