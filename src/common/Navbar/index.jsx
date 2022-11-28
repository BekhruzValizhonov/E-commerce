import { useState, memo } from "react";
import {
  Badge,
  Container,
  FullScreenDialog,
  LangDropdown,
  Link,
  MenuCatgeries,
  Nav,
  Navbar,
  Search,
  SearchIcon,
  SearchOffIcon,
  ShoppingBagIcon,
  SideCart,
  changeVisibility,
  changeVisibilityDialog,
  useDispatch,
  useSelector,
} from "./imports";
import "./navbar.css";

function NavScrollExample() {
  const [show, setShow] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const cartProductsReducer = useSelector(
    (state) => state.persistedReducer.cart.products
  );
  const { searchNavbar, searchDialog } = useSelector(
    (state) => state.visibility
  );
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <SideCart
        handleClose={handleClose}
        show={show}
        setShow={setShow}
        setBurgerMenu={setBurgerMenu}
      />

      <Navbar
        fixed="top"
        collapseOnSelect
        style={{ background: "#669900" }}
        expand="lg"
        className="navbar"
        expanded={burgerMenu}
      >
        <Container>
          <Link
            to="/"
            className="text-light"
            style={{ zIndex: 1, textDecoration: "none", fontSize: "18px" }}
          >
            Home-Shope
          </Link>
          <div className="item_1 d-flex align-items-center">
            {/* Mobile */}
            <div className="mobile_container">
              <SearchIcon
                onClick={() => dispatch(changeVisibilityDialog(true))}
                className="mobile_icon"
                sx={{
                  color: "white",
                  cursor: "pointer",
                  margin: "0px 15px",
                  zIndex: 1,
                }}
              />
              <div id="mobile_dialog">
                <FullScreenDialog
                  open={searchDialog}
                  handleClose={() => dispatch(changeVisibilityDialog(false))}
                />
              </div>
              <LangDropdown />
              <div className="cart_icon mx-3 ">
                <Badge
                  className="badge"
                  color="secondary"
                  badgeContent={cartProductsReducer?.length}
                  onClick={toggleShow}
                >
                  <ShoppingBagIcon
                    className="shopping_bag_icon"
                    sx={{ color: "white", cursor: "pointer" }}
                  />
                </Badge>
              </div>
            </div>
            {/* /Mobile */}
            <Navbar.Toggle
              id="burger_menu"
              aria-controls="navbarScroll"
              onClick={() => setBurgerMenu(!burgerMenu)}
              style={{ background: "#669900", zIndex: 1 }}
            />
          </div>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto justify-content-lg-center flex-lg-grow-1 "
              id="mobile_navbar"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <MenuCatgeries
                setBurgerMenu={setBurgerMenu}
                burgerMenu={burgerMenu}
              />
            </Nav>

            <div
              className="search_icon"
              onClick={() => dispatch(changeVisibility(!searchNavbar))}
            >
              {searchNavbar ? (
                <SearchOffIcon
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    margin: "0px  10px",
                  }}
                />
              ) : (
                <SearchIcon
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    margin: "0px  10px",
                  }}
                />
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Search searchNavbar={searchNavbar} />
    </>
  );
}

export default memo(NavScrollExample);
