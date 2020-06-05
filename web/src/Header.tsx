import React from 'react';

interface IHeader {
    title: string;
}

const Header: React.FC<IHeader> = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
        </header>
    );
}

export default Header