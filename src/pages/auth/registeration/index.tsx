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
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getUserToken, removeToken, setToken } from "../../../global";
import { useNavigate } from "react-router-dom";
import { Inputs, TRegLoginData } from "../../../types";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState<TRegLoginData>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result: TRegLoginData = await response.json();
      setLoginData(result);
      if (result.token) {
        setToken(result.token);
        navigate("/admin");
      }
    } catch (err: unknown) {
      removeToken();
      console.error((err as Error).message);
      setLoading(false);
      throw new Error((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userToken = getUserToken();
    if (userToken) navigate("/admin");
  }, [navigate]);

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
            <Typography variant="body1">Registratsiya qilish</Typography>
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
            <Button disabled={loading} variant="contained" type="submit">
              {loading ? "Loading..." : "Tizimga kirish"}
            </Button>
            <Typography
              variant="caption"
              color="blue"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Log in
            </Typography>
            {loginData?.message ? (
              <Typography variant="caption" color="red">
                {loginData.message}
              </Typography>
            ) : null}
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default RegistrationPage;

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
        {...register("phone_number", {
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
