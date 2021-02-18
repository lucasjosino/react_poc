import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PagesPromotionSearch from './Promotion/Search/Search';
import PagesPromotionForm from 'pages/Promotion/Form/Form';

function Root () {
    return (
        <Router>
            <Switch>
                <Route path="/create" component={PagesPromotionForm} />
                <Route path="/edit/:id" component={PagesPromotionForm} />
                <Route path="/" component={PagesPromotionSearch} />
            </Switch>
        </Router>
    )
}

export default Root;