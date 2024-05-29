import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "../styles/FilterSortBar.css";

function FilterSortBar() {
  return (
    <>
      <Row className="filter-sort-bar">
        <Col className="col-2 filter">
          <DropdownButton
            id="dropdown-basic-button1 filter"
            title="Filter"
            className="drop-filter-sort"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col className="gap">{/*space betweeb filt & sort btn*/}</Col>
        <Col className="col-2">
          <DropdownButton
            id="dropdown-basic-button2 sort"
            title="Sort"
            className="drop-filter-sort"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </>
  );
}

export default FilterSortBar;
