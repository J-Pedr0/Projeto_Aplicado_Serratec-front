import Card from 'react-bootstrap/Card';

import { RiDeleteBin6Line } from 'react-icons/ri';

import { ContainerCardSimplesStyle } from './CardSimples';

function CardSimples() {
return (
<ContainerCardSimplesStyle>
<Card>
<Card.Body tabIndex={0} className='card-body d-flex justify-content-between
align-items-center'>
<div className='container-texto-card'>
<Card.Title>Ativo 5055</Card.Title>
<Card.Text>
Um novo ativo foi incluído no sistema.</Card.Text>
</div>
<button title='deletar' style={{borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)"}}>
<RiDeleteBin6Line tabIndex={0}/>
</button>
</Card.Body>
</Card>
</ContainerCardSimplesStyle>
);
}

export default CardSimples;