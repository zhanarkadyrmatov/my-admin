import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import s from './Filter.module.scss'
import Form from 'react-bootstrap/Form';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255)'
            : 'rgba(255, 255, 255,)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
export default function Filter() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div>
            <Accordion className='dark:bg-[#212130] dark:text-[#fff]' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary className='dark:bg-[#212130] dark:text-[#fff]' aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Filter</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={s.InputGrid}>
                        <div className={s.filterInput}>
                            <h3>Title</h3>
                            <input type="text" placeholder='title' />
                        </div>
                        <div className={s.filterInput}>
                            <h3>Status</h3>
                            <Form.Select className={s.filterSelect} aria-label="Default select example">
                                <option className={s.input}><p>Select status</p></option>
                                <option value="0"><p>Select status</p></option>
                                <option value="0"></option>
                                <option value="0"><p>Select status</p></option>
                                <option value="0"></option>
                                <option value="0"><p>Select status</p></option>
                                <option value="0"></option>
                                <option value="0"><p>Select status</p></option>
                            </Form.Select>
                        </div>
                        <div className={s.filterInput}>
                            <h3>Date</h3>
                            <input type="date" />
                        </div>
                        <div className={s.filterBntFlex}>
                            <button className={s.btn}>Filter</button>
                            <button className={s.btn2}>Remove filter</button>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <div className={s.filterbtn}>
                <button>Add Content</button>
            </div>
        </div>
    );
}