import React from "react";
import {Route} from "react-router-dom";
import Members from './Components/member/member'


const Routes = () => {

        return (
            <div>
                {/* <Switch>
                    <Route path='/' exact component={Members}/>
                </Switch> */}
                <Route path='/' exact component={Members}/>
            </div>
        )

}

export default Routes