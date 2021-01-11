import React from 'react';
import ReactDOM from 'react-dom'
import ContactCard from './ContactCard';
const App = () => {
    return (
        <div>
            <ContactCard name="Justin" phoneNumber={1234567} workphone={456789123} email={"test@gmail.com"} />
            <ContactCard name="Jason" phoneNumber={12345} email={"test2@gmail.com"} />
            <ContactCard name="Juasin" phoneNumber={123} email={"test1@gmail.com"} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);

