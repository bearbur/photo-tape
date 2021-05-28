import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavLinksInterface } from '../../core/interfaces/pages-interfaces';
type HeaderProps = { title: string; navLinks: NavLinksInterface[] };

const Header: React.FunctionComponent<HeaderProps> = ({ title, navLinks }: HeaderProps) => {
    return (
        <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <h1>{title}</h1>
            <nav>
                {navLinks.map((navLink, navLinkKey) => (
                    <div key={`navLinkKey_${navLinkKey}`}>
                        <Link to={navLink.url} style={{ color: '#fff' }}>
                            {navLink.name}
                        </Link>
                    </div>
                ))}
            </nav>
        </header>
    );
};

export default Header;
