import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Employees from './Employee';

const Contact = () => (
    <>
    <section>
        <h1>Contact</h1>
        <p>lorem ipsum lskdjfalskf asldfkjaslkfjdsa aslkdfjaslkjdfklasdjf</p>
        <Link to='/contact/employees'>view our team</Link>
    </section>
    <section>
        <Route exact path='/contact/employees' component={Employees} />
    </section>
    </>
);

export default Contact;