import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

type CustomLinkProps = {
    to: any;
    children: any;
};

const CustomLink: FC<CustomLinkProps> = ({ to, children }) => {
    const match = useMatch(to)
    return (
        <Link to={to} style={{ color: match ? 'red' : 'black' }}>
            {children}
        </Link>
    );
};

export default CustomLink;