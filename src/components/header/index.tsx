import * as React from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { NavLinksInterface } from '../../core/interfaces/pages-interfaces';
import { useSelector } from 'react-redux';
import { getUserSelector } from '../../core/store/selectors/user/user-selector';

/*Component props type*/
type HeaderProps = { title: string; navLinks: NavLinksInterface[] };

const Header: React.FunctionComponent<HeaderProps> = ({ title, navLinks }: HeaderProps) => {
    const userData = useSelector(getUserSelector);
    const { token } = userData;
    const linksList = useMemo(() => token ? navLinks : navLinks.filter(({userPrivate})=>!userPrivate), [token, navLinks]);

    return (
        <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <h1>{title}</h1>
            <nav>
                {linksList.map((navLink, navLinkKey) => (
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
