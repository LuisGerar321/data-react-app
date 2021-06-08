
import './App.css';
import { AppUser } from './components/AppUser';
import { ThemeProvider } from './context/ThemeContext';
import { LoginProvider } from './context/LoginContext ';


function App() {
  return (


    <ThemeProvider>
      <LoginProvider>
        <div className="App">
          <AppUser/>
        </div>
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
