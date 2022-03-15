import React from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../../context'
import {useContext} from 'react'

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';

const Header: React.FC = () => {
    const [user]: any = useContext(Context);

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
                </Link>
                {user ? (
                    <span>Logged in as: {user.username}</span>
                ) : (
                    <Link to='/login'>
                        <span>Log in</span>
                    </Link>
                )}
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
            </Content>
        </Wrapper>
    );
}

export default Header;
