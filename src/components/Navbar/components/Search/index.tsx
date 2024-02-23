//mui icons
import SearchIcon from "@mui/icons-material/Search";

//styled components
import { SearchIconWrapper, SearchWrapper, StyledInputBase } from "./styled";

//props
interface SearchBaseProps {
  isActive: boolean;
}

//component
const SearchBase = ({ isActive }: SearchBaseProps) => {
  return (
    <SearchWrapper
      sx={{
        display: isActive ? "block" : { xs: "block", md: "none" },
        marginLeft: { xs: "15px", md: "53px" },
      }}
    >
      <SearchIconWrapper>
        <SearchIcon
          sx={{ color: "#0000008a", display: isActive ? "none" : "block" }}
        />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search" />
    </SearchWrapper>
  );
};
export default SearchBase;
