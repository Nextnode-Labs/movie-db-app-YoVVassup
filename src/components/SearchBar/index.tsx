import React, { useState, useEffect, useRef } from 'react';
import searchIcon from '../../images/search-icon.svg';
import { InputText } from 'primereact/inputtext';

import { Wrapper, Content } from './SearchBar.styles';

type Props = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    },[setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                    <InputText value={state}
                               onChange={(event) => setState(event.currentTarget.value)}
                               placeholder='Search Movie'
                               keyfilter={/^[^#<>*!+=&]+$/}
                    />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
