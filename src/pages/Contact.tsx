import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BasicAppBar from '../components/BasicAppBar';

export interface IHomePageProps {};


const ContactPage: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();

    return <div>
        <Link to="/about">Go to the About Page!</Link>
        <br></br>
        <button onClick={() => navigate('/layout/55')}>Go, Layout with a number!</button>
        <p>This is the contact page.</p>
    </div>;
}

export default ContactPage;