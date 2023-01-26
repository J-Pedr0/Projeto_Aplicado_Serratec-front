import { React } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { AiOutlineSearch } from 'react-icons/ai';
import { ContainerSearch } from './busca';

function SearchComponent() {
    return (
        <ContainerSearch >
            <InputGroup
                className='mb-3'
            >
                <InputGroup.Text><AiOutlineSearch /></InputGroup.Text>
                <Form.Control placeholder='Pesquise por patrimônio ou colaborador' tabIndex={0} />
            </InputGroup>
        </ContainerSearch>
    );
}
export default SearchComponent;