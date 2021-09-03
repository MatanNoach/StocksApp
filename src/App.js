import logo from "./logo.svg";
import "./App.css";
import Stock from "./components/Stock";
import { Grid } from "@material-ui/core";
function App() {
  return (
    <div>
      <div style={{ margin: "auto", width: "50%" }}>
        <Grid container>
          <Grid item xs={6}>
            <Stock symbol="IBM" />
          </Grid>
          <Grid item xs={6}>
            <Stock symbol="MFST" />
          </Grid>
          <Grid item xs={6}>
            <Stock symbol="AMZN" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
