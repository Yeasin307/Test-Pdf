import * as React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';
import './App.css';
import CreateVulnerability from './Components/CreateVulnerability';
import PdfDocument from './Components/PdfDocument';

function App() {
  const [createOpen, setCreateOpen] = React.useState(false);
  const [vulnerability, setVulnerability] = React.useState([]);

  return (
    <div className="App">

      <Typography style={{ color: '#c94aef', marginTop: '20px' }} variant="h3" gutterBottom>
        Test React Pdf
      </Typography>

      <CreateVulnerability
        createOpen={createOpen}
        setCreateOpen={setCreateOpen}
        vulnerability={vulnerability}
        setVulnerability={setVulnerability}
      />

      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="categories table">

          <TableHead>
            <TableRow>
              <TableCell align="center">NAME</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Download</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {vulnerability?.map((single) => (
              <TableRow
                key={single?.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">{single?.name}</TableCell>
                <TableCell align="center">{single?.title}</TableCell>
                <TableCell align="center">
                  <PDFDownloadLink
                    document={<PdfDocument single={single} />}
                    fileName={single.name + ".pdf"}
                    style={{ textDecoration: 'none' }}
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? 'Loading...' : < Button variant="outlined" color="success">Download</Button>
                    }
                  </PDFDownloadLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

    </div >
  );
}

export default App;
