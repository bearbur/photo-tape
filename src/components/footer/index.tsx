import * as React from 'react';

type FooterProps = { email: string};

const Footer: React.FunctionComponent<FooterProps> = ({ email }: FooterProps) => {
    return (
        <footer style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <h4>{`Email: `}</h4>
            <a href={`mailto:${email}`}>{email}</a>
        </footer>
    );
};

export default Footer;
