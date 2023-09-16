import { React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  console.log("user is",user);
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // Logged out
        dispatch(logout())
      }
    });

    return unsubscribe;
  }, [dispatch]);

  
    return (
      <div className="App">
        <Router>
          {!user ? (
            <LoginScreen />
          ):(
            <Switch>
              <Route exact path ="/">
                <HomeScreen />
              </Route>
              <Route
        exact path ="/profile">
          <ProfileScreen />
        </Route>
            </Switch>
          )}
        </Router>
       
      </div>
  );
}

export default App;
