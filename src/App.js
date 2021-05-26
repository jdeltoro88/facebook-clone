import React, { useState } from "react";
import { Switch, Paper } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh'}}>
    
    <div className="app">
      {!user ?   (

        <Login />

      ) : (
        

        <>

      
     <Header/>

     <div className="app__body">
       <Sidebar />
       <Feed />
       <Widgets />
     
       {/*feed*/}
       {/*widgets*/}
     </div>
     </>

     )}






      
     
    </div>
    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
