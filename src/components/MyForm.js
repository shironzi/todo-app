import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function MyForm() {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Search note..."></input>
      </form>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Available</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Expired</Dropdown.Item>
      </DropdownButton>
      <button>
        <DarkModeIcon style={{ fontSize: 40 }} />
      </button>
    </div>
  );
}

export default MyForm;
