import { CSSProperties, forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
// import { useTheme } from "@mui/material/styles";
import { Box, BoxProps, Link } from "@mui/material";

//Props interface
interface LogoProps extends BoxProps {
  sx?: { [key: string]: CSSProperties };
  disabledLink?: boolean;
}

// ----------------------------------------------------------------------

const Logo = forwardRef(
  ({ disabledLink = false, sx, ...other }: LogoProps, ref) => {
    // const theme = useTheme();

    // const PRIMARY_LIGHT = theme.palette.primary.light;

    // const PRIMARY_MAIN = theme.palette.primary.main;

    // const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: { xs: 29, md: 34 },
          height: { xs: 35, md: 40 },
          display: "inline-flex",
          ...sx,
        }}
        {...other}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.4727 40.0547">
          <path
            d="M16.7363 0L0 9.91821L0 22.1255L16.7363 32.0437L30.1621 24.4143L30.1621 28.0383L16.7363 36.0491L0 25.9402L0 30.3271L16.7363 40.0547L33.4727 30.3271L33.4727 18.1199L20.0469 25.9402L20.0469 22.1255L33.4727 14.1145L33.4727 9.91821L16.7363 0Z"
            fill="currentColor"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </svg>
      </Box>
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return (
      <Link to="/" component={RouterLink} sx={{ display: "contents" }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
