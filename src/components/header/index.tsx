import * as React from 'react';

type HeaderProps = { title: string; navLinks: Array<{ navLink: string; name: string }> };

const Header: React.FunctionComponent<HeaderProps> = ({ title, navLinks }: HeaderProps) => {
    return (
        <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <h1>{title}</h1>
            <nav>
                {navLinks.map((navLink, navLinkKey) => (
                    <div key={`navLinkKey_${navLinkKey}`}>{navLink['name']}</div>
                ))}
            </nav>
        </header>
    );
};

export default Header;
