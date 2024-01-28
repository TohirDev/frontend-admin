import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import LOGIN from "../../../assets/logo-svg.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type Inputs = {
  phoneNumber: number;
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
            <Typography variant="body1">Tizimga kirish</Typography>
            <Box
              component={"img"}
              src={LOGIN}
              sx={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                ml: 6,
              }}
            />
            <Typography variant="body1">Telefon raqam</Typography>
            <InputFields register={register} />
            <Button variant="contained" type="submit">
              Tizimga kirish
            </Button>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default LoginPage;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const InputFields = ({ register }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
  };
  return (
    <>
      <OutlinedInput
        {...register("phoneNumber", {
          required: true,
        })}
        type="number"
        placeholder="+998--___-__-__"
      />
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Password
        </InputLabel>
        <OutlinedInput
          {...register("password", {
            required: true,
          })}
          fullWidth
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </>
  );
};
