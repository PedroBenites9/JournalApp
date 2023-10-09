import { Grid, TextField, Typography } from "@mui/material";
import "../../styles.css";

export const LoginPages = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction={"column"}
        alignContent={"center"}
        justifyContent={"center"}
        sx={{
          minHeight: "100vh",
          backgroundColor: "primary.main",
          padding: "4",
        }}
      >
        <Grid
          item
          className="box-shadow"
          xs={3}
          sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>
            Login ta god
          </Typography>

          <form action="">
            <Grid container>
              <Grid Item xs={12} sx={{ mb: 2 }}>
                <TextField
                  label="correo"
                  type="email"
                  placeholder="correo@hotmail.com"
                  fullWidth
                />
              </Grid>
              <Grid Item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Contaseña"
                  type="password"
                  placeholder="Contraseña"
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
