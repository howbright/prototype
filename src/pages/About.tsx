import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export interface IAboutPageProps {};


const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {


    const [message, setMessage] = useState('');
    const { page } = useParams();
     
    useEffect(() => {
      if(page) {
          setMessage('the page is ' + page);          
      } else {
          setMessage('No page is provided!');
      }
    }, [])


    return <div>
        <p>This is the About page.</p>
        <p>{message}</p>
    </div>;
}

export default AboutPage;