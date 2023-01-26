import { React } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { AiOutlineSearch } from 'react-icons/ai';
import { ContainerSearch } from './BuscaHistorico';

function ComponenteBuscaHistorico() {
return (
<ContainerSearch >
<InputGroup
className='mb-3'
>
<InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
<Form.Control placeholder='Pesquise por movimento' tabIndex={0}/>
</InputGroup>
</ContainerSearch>
);
}
export default ComponenteBuscaHistorico;