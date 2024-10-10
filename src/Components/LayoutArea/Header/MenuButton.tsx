import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

type MenuButtonProps = {
    item: string;
    link: string;
    hash?: string;
    setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
};

export default function MenuButton({ item, link, hash, setIsMenuOpen }: MenuButtonProps): JSX.Element {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (hash) {
            e.preventDefault();
            navigate(link, { replace: true });
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            if (setIsMenuOpen) {
                setIsMenuOpen(false)
            }
            navigate(link);
        }
    };

    return (
        <li className="flex items-center">
            <Link to={link} onClick={handleClick} >
                <span className="inline-block mr-2">{item}</span>
            </Link>
        </li>
    );
}
