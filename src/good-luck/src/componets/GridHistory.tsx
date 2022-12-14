import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from "react";

type resultProps = {
  name: string
  idRaffle: number
  RaffleName: string
  RaffleParticipants: number
  RaffleUserDrawn: number
  date: string
  description: string
};


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    topMargin: 10
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


export default function CustomizedTables() {

  const [result, setResult] = useState<resultProps[]>([]);

  function removeDloubleQuotes(txt: string): string{
    let txtTreat = txt
    return txtTreat.replace(/['"]+/g, '')
  }

  // Download file
  function downloadRaffle(...data: any){
    const element = document.createElement("a");
    var id = JSON.stringify(data[0])
    var titulo = JSON.stringify(data[1])
    var quatParti = JSON.stringify(data[2])
    var nSorteado = JSON.stringify(data[3])
    var dataSor = JSON.stringify(data[4])
    var descricao = JSON.stringify(data[0])
    titulo =  removeDloubleQuotes(titulo)
    dataSor = removeDloubleQuotes(dataSor)
    const file = new Blob([`Id ${id}\nTitulo: ${titulo}\nQuantidade Participantes: ${quatParti}\nNº Sorteado: ${nSorteado.replace(/['"]+/g, '')}\nData sorteio: ${dataSor}\nDescrição: ${descricao}\n`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `Sorteio${id}.txt`
    element.click();
  }

  useEffect(() => {
    const apiGetRaffles = async () => {
      const data = await fetch("http://localhost:8080/raffle/all", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };
    apiGetRaffles();
  }, []);

  return (
    <div className="Home">

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">Titulo</StyledTableCell>
              <StyledTableCell align="center">Quantidade Participantes</StyledTableCell>
              <StyledTableCell align="center">Nº Sorteado</StyledTableCell>
              <StyledTableCell align="center">Data sorteio</StyledTableCell>
              <StyledTableCell align="center">Descrição</StyledTableCell>
              <StyledTableCell align="center">Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result?.map((row) => (
              <StyledTableRow>
                <StyledTableCell align="center">{row.idRaffle}</StyledTableCell>
                <StyledTableCell align="center">{row.RaffleName}</StyledTableCell>
                <StyledTableCell align="center">{row.RaffleParticipants}</StyledTableCell>
                <StyledTableCell align="center">{row.RaffleUserDrawn}</StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                <StyledTableCell align="center">{row.description}</StyledTableCell>
                <StyledTableCell align="center">                        
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={()=>downloadRaffle(row.idRaffle, row.RaffleName, row.RaffleParticipants, row.RaffleUserDrawn, row.date, row.description)}
                  color="inherit"
                >
                  <DownloadIcon />
                </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}