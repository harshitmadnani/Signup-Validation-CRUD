import React from 'react'
import {Route, Switch} from "react-router-dom"
import Signup from "./Signup"
import Crud from './Crud'

const App = () => {
    return (
        <div>
            
            <Switch>
                {/* <Route path="/" exact component={Home} />  */}
              <Route path="/signup" exact component={Signup} />
              <Route path="/" exact component={Crud} />
             </Switch>   


        </div>
    )
}

export default App
