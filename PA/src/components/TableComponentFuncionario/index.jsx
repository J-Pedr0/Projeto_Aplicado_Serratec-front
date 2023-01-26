import { React } from 'react';
import Table from 'react-bootstrap/Table';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { BsEye } from 'react-icons/bs';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { ContainerTable } from './TableFuncionario';



function TableComponentFuncionario() {

    const [funcionarioList, setFuncionarioList] = useState([])
    const [loading, setLoading] = useState(true)
    const [text, setText] = useState('')
    const [funcionarioBusca, setFuncionarioBusca] = useState([])

    useEffect(() => {
        const getFuncionario = async () => {
            setLoading(true)
            const { data } = await api.get("/testeFuncionarios/");
            console.log(data)
            setFuncionarioList(data)
            setFuncionarioBusca(data)
            setLoading(false)
        }
        getFuncionario()
    }, [])

    useEffect(() => {
        const response = funcionarioList.filter(funcionario =>
            funcionario.nome.toLowerCase().includes(text.toLowerCase()))
        setFuncionarioBusca(response)
    }, [text])

    const deleteFuncionario = async (id) => {
        try {
            const { data, status } = await api.delete(`/testeFuncionarios/${id}`)
            console.log(data, status);
            if (status === 200) {
                console.log("Passou aqui")
                const updatedFuncionarioList = funcionarioList.filter((item) => item.id != data.id);
                setFuncionarioBusca(updatedFuncionarioList);
                setFuncionarioList(updatedFuncionarioList);
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <ContainerTable>
            <div className='table-area'>
                <Table hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Cargo</th>
                            <th>Última Movimentação</th>
                            <th colSpan='3'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                        {funcionarioBusca.map((item, index) => {

                            return (<tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>{item.cargo}</td>
                                <td>{item.ultimaMovimentacao}</td>
                            
                                <td className='coluna-acao'>
                                    <BsEye />
                                </td>
                                <td className='coluna-acao'>
                                    <CiEdit />
                                </td>
                                <td className='coluna-acao'>
                                    <RiDeleteBin6Line id='icone-delete' onClick={() => deleteFuncionario(item.id)}/>
                                </td>
                            </tr>
                            )
                        })}


                    </tbody>
                </Table>
            </div>
        </ContainerTable>
    );
}
export default TableComponentFuncionario;