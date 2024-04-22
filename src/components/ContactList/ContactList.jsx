import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import s from './ContactList.module.scss'
import Listarmor from '../Cards/listarmor/listarmor';
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

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <div className={s.contactlist_all}>
                <Accordion className='dark:bg-[#212130] dark:text-[#fff]' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="paneld-header">
                        <Typography>Contact List</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={s.contactlist}>
                            <div className={s.listGrid}>
                                <div className={s.nomer}>
                                    <h4>№</h4>
                                </div>
                                <div className={s.title}>
                                    <h4>Title</h4>
                                </div>
                                <div className={s.status}>
                                    <h4>Status</h4>
                                </div>
                                <div className={s.modified}>
                                    <h4>Modified</h4>
                                </div>
                                <div className={s.actions}>
                                    <h4>Actions</h4>
                                </div>
                            </div>
                            <div>
                                <Listarmor />
                                <Listarmor />
                                <Listarmor />
                                <Listarmor />
                                <Listarmor />
                                <Listarmor />
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div >
    )
}
