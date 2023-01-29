import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
import { fetchServices } from '../../redux/slices/servicesSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Main() {
  const dispatch = useDispatch();
  const services = useSelector((store) => store.services);
  const servicesError = useSelector((store) => store.servicesError);
  useEffect(() => {
    dispatch(fetchServices());
  }, []);
  return (
    <Container maxWidth="md">
      {((services.length === 0) && !servicesError)
        ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )
        : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Название услуги</StyledTableCell>
                  <StyledTableCell align="right">Цена</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {services?.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      <NavLink to={`/${row.id}/details`} style={{ textDecoration: 'none' }}>{row.name}</NavLink>
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      {servicesError
        ? (
          <Stack sx={{ width: '50%' }} spacing={2}>
            <Alert severity="error">Произошла ошибка!</Alert>
            <Button variant="outlined" color="error" onClick={() => dispatch(fetchServices())}>
              Повторить запрос
            </Button>
          </Stack>
        )
        : (null)}
    </Container>
  );
}
