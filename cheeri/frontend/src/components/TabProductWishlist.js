import "../styles/TabProductWishlist.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import ProductCards from "./ProductCards";

function TabProductWishlist() {
  return (
    <Tabs
      defaultActiveKey="products"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 tabs-wishprod-whole"
    >
      <Tab eventKey="products" title="Products">
        <Row className="products-container-main">
          <ProductCards />
        </Row>
      </Tab>
      <Tab eventKey="wishlist" title="Wishlist">
        <h2>Your Wishlist</h2>
        <Row className="wishlist-container-main"></Row>
      </Tab>
    </Tabs>
  );
}

export default TabProductWishlist;
