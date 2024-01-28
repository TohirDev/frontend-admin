import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import LOGIN from "../../../assets/logo-svg.svg";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  phoneNumber: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "grid", placeItems: "center", height: "100vh" }}
    >
      <Card
        sx={{
          width: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Typography variant="h3">Tizimga kirish</Typography>
            <Box
              component={"img"}
              src={LOGIN}
              sx={{
                width: "300px",
                height: "300px",
                objectFit: "contain",
              }}
            />
            <Fileds register={register} />
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default LoginPage;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Fileds = ({ register }: any) => {
  return (
    <>
      <Typography variant="h5">Telefon raqam</Typography>
      <TextField
        {...register("phoneNumber", { required: true })}
        type="tel"
        placeholder="+998--___-__-__"
        autoComplete="current-password"
      />
      <TextField
        {...register("password", { required: true })}
        placeholder="Password"
        type="password"
        aria-invalid="false"
        id=":r5:"
        name="password"
        className="MuiInputBase-input MuiOutlinedInput-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
        value
        autoComplete="current-password"
      />
      <Button variant="contained" type="submit">
        Tizimga kirish
      </Button>
    </>
  );
};
