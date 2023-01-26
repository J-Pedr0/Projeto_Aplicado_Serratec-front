import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { BsEye } from 'react-icons/bs';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { ContainerTable } from './TabelaHistorico';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import { apiii } from '../../services/apiii';

// import { getAtivos } from '../../services/apiii';

function ComponenteTabelaHistorico() {

    const [historicoList, setHistoricoList] = useState([])
    const [loading, setLoading] = useState(true)
    const [text, setText] = useState('')
    const [historicoBusca, setHistoricoBusca] = useState([])

    useEffect(() => {
        const getHistorico = async () => {
            const { data } = await apiii.get("/api/ativo/listarAtivoManutencao");
            console.log(data);
            setHistoricoList(data)
            setHistoricoBusca(data)
            setLoading(false)
        }
        getHistorico();
    }, [])

    // const deleteLogico = async (id) => {
    //     try {
    //         const { data, status } = await apiii.put(`/api/ativo/deleteLogico/${id}`);
    //         console.log(data, status);
    //         if (status === 200) {
    //             console.log("Passou aqui")
    //             const updatedAtivoList = ativoList.filter((item) => item.idAtivo != data.idAtivo);
    //             setAtivoBusca(updatedAtivoList);
    //             setAtivoList(updatedAtivoList);
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }

    // }

    useEffect(() => {
        const response = historicoList.filter(ativo =>
            ativo.nome.toLowerCase().includes(text.toLowerCase()))
        setHistoricoBusca(response)
    }, [text])

    // const deleteAtivo = async (id) => {
    //     try {
    //         const { data, status } = await api.delete(`/testeAtivos/${id}`)
    //         console.log(data, status);
    //         if (status === 200) {
    //             console.log("Passou aqui")
    //             const updatedAtivoList = ativoList.filter((item) => item.id != data.id);
    //             setAtivoBusca(updatedAtivoList);
    //             setAtivoList(updatedAtivoList);
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }


    return (
        <ContainerTable>
            <div className='table-area'>
                <Table hover>
                    <thead tabIndex={0}>
                        <tr>

                            <th>Data início</th>
                            <th>Data fim</th>
                            <th>Status</th>
                            <th>Colaborador</th>
                            <th>Comentário</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {historicoBusca.map((item, index) => {

                            return (<tr key={index}>
                                <td tabIndex={0}>{item.idAtivo}</td>
                                <td tabIndex={0}>{item.patrimonio}</td>
                                <td tabIndex={0}>{item.nomeStatus}</td>
                                <td tabIndex={0}>{item.fullName || "Nenhum"}</td>
                                <td tabIndex={0}>{item.dataInicio}</td>
                                <td tabIndex={0}>{item.ultimaManutencao || "00/00/0000"}</td>
                                {/* <td className='coluna-acao'>

                                    <Link to={`/equipamento/${item.idAtivo}`} title="visualizar ativo">
                                        <BsEye />
                                    </Link>
                                </td>



                                <td className='coluna-acao' >
                                    <Link to={`/edicao/${item.idAtivo}`} title="editar ativo">
                                        <CiEdit />
                                    </Link>
                                </td>
                                <td className='coluna-acao' >
                                    <button tabIndex={0} onClick={() => deleteLogico(item.idAtivo)} style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)" }} title="deletar ativo">
                                        <RiDeleteBin6Line id='icone-delete' />
                                    </button>
                                </td> */}
                            </tr>
                            )
                        })}


                    </tbody>
                </Table>
            </div>
        </ContainerTable>
    );
}
export default ComponenteTabelaHistorico;