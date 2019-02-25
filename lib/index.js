import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
console.log('check');
import Markdown from '../markdown/markdown';


const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/" component={Markdown} />
            </Switch>
        </Suspense>
    );
};

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
);

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}

