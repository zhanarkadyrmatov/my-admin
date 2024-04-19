import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import s from './history.module.scss'
import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import View from '../../components/Modal/View/View';
import Data from '../../components/Modal/Data/Data';
import Search from '../../components/Modal/Search/Search';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black.padding,
    },
    [`&.${tableCellClasses.body}`]: {
        padding: '16px',
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    number,
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { number, name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, 'Locomotive', 'admin: Under Astralag', 'active', 'Success',),
    createData(2, 'Locomotive', 'admin: Aron Yakobishvili', 'active', 'Success',),
    createData(3, 'Locomotive', ' admin: Diego Cochen', 'active', 'Success',),
    createData(4, 'Locomotive  ', 'admin: Marc-Andre ter Stegen', 'active', 'Success',),
    createData(5, 'Locomotive', 'admin: Alex Balde', 'active', 'Success',),
    createData(6, 'Locomotive', 'admin: Alex Balde', 'active', 'Success',),
    createData(7, 'Locomotive', 'admin: Alex Balde', 'active', 'Success',),
    createData(8, 'Locomotive', 'admin: Alex Balde', 'active', 'Success',),
    createData(9, 'Locomotive', 'admin: Alex Balde', 'active', 'Success',),
    createData(10, 'Locomotive', 'admin: Alex Balde', 'active', 'Success',),
];

function HistoryPage() {
    const [data, setData] = useState(false)
    const [search, setSearch] = useState(false)
    const [delet, setDelet] = useState(false)
    const [user, setUser] = useState(false)
    return (
        <>
            <TableContainer component={Paper} className='dark:bg-[#212130] ' >
                <div className={`${s.project_header} ${s.project_header} dark:bg-[#212130]`}>
                    <div className={s.project_header_flex}>
                        <th>FOOTBALL FIELDS </th>
                        <th className={s.icons}><FaMinus /><FaTimes /></th>
                    </div>
                </div>
                <div className={`${s.tableResponsive} dark:bg-[#212130]`}>
                    <Table sx={{ minWidth: '100%' }} aria-label="customized table" style={{ width: '100%', overflow: 'scroll' }}
                    >
                        <TableHead style={{ width: "100%" }} className='dark:bg-[#212130]'>
                            <TableRow >
                                <StyledTableCell style={{
                                    padding: '10px'
                                }}><p>��</p></StyledTableCell>
                                <StyledTableCell ><p className='dark:text-[#fff]' style={{ marginLeft: '-10px' }}> Название</p></StyledTableCell>
                                <StyledTableCell ><p>Администраторы</p></StyledTableCell>
                                <StyledTableCell ><p>Type</p></StyledTableCell>
                                <StyledTableCell ><p>Posted-Date</p></StyledTableCell>
                                <StyledTableCell ><p>Last Date To Apply</p></StyledTableCell>
                                <StyledTableCell ><p>Статус</p></StyledTableCell>
                                <StyledTableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody className={s.display}>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell className={s.padding} component="th" scope="row"><p>{row.number}</p></StyledTableCell>
                                    <StyledTableCell className={s.project_width} component="th" scope="row"><p>{row.name}</p></StyledTableCell>
                                    <StyledTableCell className={s.project_width_200}><p>{row.calories}</p></StyledTableCell>
                                    <StyledTableCell ><p>full-time</p></StyledTableCell>
                                    <StyledTableCell ><p>12-01-2023</p></StyledTableCell>
                                    <StyledTableCell ><p>30-01-2023</p></StyledTableCell>
                                    <StyledTableCell className={s.project_width300}>
                                        <button className={s.project_succes}><p>{row.fat}</p></button>
                                    </StyledTableCell>
                                    <StyledTableCell >

                                    </StyledTableCell>
                                    <div className={s.project_flex_button}>
                                        <button onClick={() => setData(!data)} className={s.project_button_green}><IoEyeSharp size={20} /></button>
                                        <button onClick={() => setUser(!user)} className={s.project_button_aqua}><HiOutlinePencilSquare size={20} /></button>
                                        <button onClick={() => setSearch(!search)} className={s.project_button_red}><MdDelete size={20} /></button>
                                    </div>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </TableContainer >
            {data && (<Data />)}
            {user && (<View />)}
            {search && (<Search />)}
            <div>

            </div>
        </>
    );
}

export default HistoryPage;