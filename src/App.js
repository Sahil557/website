
import { createTheme, Container, ThemeProvider, Paper, Grid } from "@material-ui/core";
import { Header } from "./component/HeaderComponent/Header";
import "./App.css"
import { CardCompo } from "./component/CardComponent/Card";
import { useState } from "react";
import { GridItem } from "./component/DataGrid/GridItem";
import { Footer } from "./component/FooterComponent/Footer";
import { AddGridItem } from "./component/DataGrid/AddGridItem";

function App() {

  const[darkMode, isDarkMode] = useState(false) 

  const darkTheme = createTheme({
    palette: {
      type: darkMode? 'dark': 'light',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper>
      <Container>
        <Header modeOn={()=>isDarkMode(!darkMode)}/>
        <CardCompo/> 
      </Container>
      
      <Container>

      <Grid container>

      <Grid>
      <Container>
      <GridItem/>
      </Container>
      </Grid>
     
      <Grid>
      <Container> 
      <GridItem/>
      </Container>
      </Grid>

      <Grid>
      <Container> 
      <GridItem/>
      </Container>
      </Grid>
      
      <Grid>
      <Container> 
      <GridItem/>
      </Container>
      </Grid>

      <Grid>
      <Container> 
      <GridItem/>
      </Container>
      </Grid>

      <Grid>
        <Container>
        <AddGridItem/>
        </Container>
      </Grid>

      </Grid>

      </Container>
      
      
      
      <Footer/>
      </Paper>
    </ThemeProvider>
    
  )
}
export default App;
