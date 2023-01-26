import React from 'react';
import Table from 'react-bootstrap/Table';
import { Form, Modal } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { BsEye } from 'react-icons/bs';
import { IoMdAddCircleOutline } from 'react-icons/io';

import api from '../../services/api';
import { useState, useEffect } from 'react';
import { ContainerTable } from './tabela';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import { apiii } from '../../services/apiii';

// import { getAtivos } from '../../services/apiii';

function TableComponent() {

    const [ativoListFiltrado, setAtivoListFiltrado] = useState([])


    const [ativoList, setAtivoList] = useState([])
    const [loading, setLoading] = useState(true)
    const [text, setText] = useState('')
    const [ativoBusca, setAtivoBusca] = useState([])
    const [atividade, setAtividade] = useState(false)
    const [vamosVer, setVamosVer] = useState("/api/ativo/listarAtivoManutencao")
    const [role, setRole] = useState("")
    const [id, setId] = useState()

    const [show, setShow] = useState(false);
    const [showzin, setShowzin] = useState(false);

    const handleClose = () => {
        setShow(false);
        setShowzin(false);
    }

    const handleShow = (idAtivo) => {
        setId(idAtivo)
        setShow(true);
    }

    const handleShowzin = (idAtivo) => {
        setId(idAtivo)
        setShowzin(true);
    }

    useEffect(() => {
        setRole(localStorage.getItem('role'));
    }, [])

    useEffect(() => {

        if (!atividade) {
            setVamosVer("/api/ativo/listarAtivoManutencao");
        } else {
            setVamosVer("/api/ativo/listarInativoManutencao")
        }

        const getAtivos = async () => {
            const { data } = await apiii.get(vamosVer);
            console.log(data);
            setAtivoList(data)
            setAtivoBusca(data)
            setLoading(false)
        }
        getAtivos();
        console.log(atividade);
        console.log(role);


    }, [atividade, vamosVer, role])

    const deleteLogico = async (id) => {
        console.log(id)
        try {
            const { data, status } = await apiii.put(`/api/ativo/deleteLogico/${id}`);
            console.log(data, status);
            if (status === 200) {
                console.log("Passou aqui")
                const updatedAtivoList = ativoList.filter((item) => item.idAtivo != data.idAtivo);
                setAtivoBusca(updatedAtivoList);
                setAtivoList(updatedAtivoList);
            }
            setShow(false);
        } catch (e) {
            console.log(e)
        }

    }

    const ativacao = async (id) => {
        console.log(id)
        try {
            const { data, status } = await apiii.put(`/api/ativo/ativacaoAtivo/${id}`);
            console.log(data, status);
            if (status === 200) {
                console.log("Passou aqui")
                const updatedAtivoList = ativoList.filter((item) => item.idAtivo != data.idAtivo);
                setAtivoBusca(updatedAtivoList);
                setAtivoList(updatedAtivoList);
            }
            setShowzin(false);
        } catch (e) {
            console.log(e)
        }

    }

    

    useEffect(() => {
        const response = ativoList.filter(ativo =>
            ativo.nome.toLowerCase().includes(text.toLowerCase()))
        setAtivoBusca(response)
    }, [text])

    const mudarAtividade = () => {
        setAtividade(!atividade)
    }


    return (
        <ContainerTable style={{ marginTop: "" }}>
            <div className='table-area'>
                <Table hover>
                    <thead tabIndex={0}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <p>Ativo/Inativo</p>
                            <Form.Check
                                type="switch"
                                id=""
                                label=""
                                style={{ marginLeft: "2rem" }}
                                value={atividade}
                                onClick={() => mudarAtividade()}
                            />

                        </div>

                        <tr>



                            <th>ID</th>
                            <th>Patrimônio</th>

                            <th>Status</th>
                            <th>Colaborador Vinculado</th>
                            <th>Data de Entrega</th>
                            <th>Última Manutenção</th>
                            <th colSpan='3'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                        {ativoBusca.map((item, index) => {

                            return (<tr key={index}>
                                <td tabIndex={0}>{item.idAtivo}</td>
                                <td tabIndex={0}>{item.patrimonio}</td>
                                <td tabIndex={0}>{item.nomeStatus}</td>
                                <td tabIndex={0}>{item.fullName || "Nenhum"}</td>
                                <td tabIndex={0}>{item.dataInicio}</td>
                                <td tabIndex={0}>{item.ultimaManutencao || "00/00/0000"}</td>
                                <td className='coluna-acao'>

                                    <Link to={`/equipamento/${item.idAtivo}`} title="visualizar ativo">
                                        <button style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", color: "#01A998" }}>
                                            <BsEye />
                                        </button>
                                    </Link>
                                </td>

                                {role == "SYSTEM_ADMINISTRATOR" || role == "ADMINISTRATIVE_DEPARTMENT" ?
                                    <td className='coluna-acao' >
                                        <Link to={`/edicao/${item.idAtivo}`} title="editar ativo">
                                            <button style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", color: "#0D0D0D" }}>
                                                <CiEdit />
                                            </button>
                                        </Link>
                                    </td>
                                    :
                                    <td className='coluna-acao' >
                                        {/* <Link to={`/edicao/${item.idAtivo}`} title="editar ativo">
                                        <CiEdit />
                                    </Link> */}
                                    </td>
                                }

                                {role == "SYSTEM_ADMINISTRATOR" || role == "ADMINISTRATIVE_DEPARTMENT" ?


                                    <td className='coluna-acao' >

                                        {!atividade ?

                                            <button tabIndex={0} onClick={() => handleShow(item.idAtivo)} style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", color: "#fa5a54" }} title="deletar ativo">
                                                <RiDeleteBin6Line id='icone-delete' />
                                            </button>
                                            :
                                            <button tabIndex={0} onClick={() => handleShowzin(item.idAtivo)} style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", color: "#03A688" }} title="inativar ativo">
                                                < IoMdAddCircleOutline />
                                            </button>
                                        }


                                    </td>


                                    :
                                    <td className='coluna-acao' >
                                        {/* <button tabIndex={0} onClick={() => console.log("Você não tem permição")} style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)"}} title="deletar ativo">
                                        <RiDeleteBin6Line id='icone-delete' />
                                    </button> */}
                                    </td>
                                }

                                {/* {!atividade ?
                                    <td className='coluna-acao' >
                                        <button tabIndex={0} onClick={() => deleteLogico(item.idAtivo)} style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)" }} title="inativar ativo">
                                            <RiDeleteBin6Line id='icone-delete' />
                                        </button>
                                    </td>
                                    :
                                    <td className='coluna-acao' title="ativar ativo">
                                        <button tabIndex={0} onClick={() => deleteLogico(item.idAtivo)} style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", color: "#03A688" }} title="inativar ativo">
                                            < IoMdAddCircleOutline />
                                        </button>
                                    </td>
                                } */}


                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Atenção!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Você quer mesmo inativar este ativo ?</Modal.Body>
                                    <Modal.Footer>
                                        <button variant="secondary" style={{
                                            backgroundColor: "#585859",
                                            width: "10rem",
                                            borderColor: "#585859",
                                            marginRight: "1rem"
                                        }} onClick={handleClose}>
                                            Cancelar
                                        </button>

                                        <button variant="primary" style={{
                                            backgroundColor: "#03A688",
                                            width: "10rem",
                                            borderColor: "#03A688",
                                        }} onClick={() => deleteLogico(id)}>
                                            Inativar Ativo
                                        </button>
                                    </Modal.Footer>
                                </Modal>

                                <Modal show={showzin} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Atenção!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Você quer mesmo ativar este ativo ?</Modal.Body>
                                    <Modal.Footer>
                                        <button variant="secondary" style={{
                                            backgroundColor: "#585859",
                                            width: "10rem",
                                            borderColor: "#585859",
                                            marginRight: "1rem"
                                        }} onClick={handleClose}>
                                            Cancelar
                                        </button>

                                        <button variant="primary" style={{
                                            backgroundColor: "#03A688",
                                            width: "10rem",
                                            borderColor: "#03A688",
                                        }} onClick={() => ativacao(id)}>
                                            Ativar Ativo
                                        </button>
                                    </Modal.Footer>
                                </Modal>




                            </tr>
                            )
                        })}


                    </tbody>
                </Table>
            </div>
        </ContainerTable>
    );
}
export default TableComponent;