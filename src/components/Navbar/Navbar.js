import { Link } from "react-router-dom";

export function NavBar(props) {
  function Logout() {
    props.setAuth(false);
  }
  return (
    <div class="container-fluid pl-0 pr-0">
      <ul class="nav" style={{ backgroundColor: "#2B4F67" }}>
        <div class="d-flex mr-auto">
          <li class="nav-item my-0 mr-md-auto">
            <Link to="/" class="nav-link active text-white">
              <h5>H A B A R . COM</h5>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link text-white"
              to="/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All news
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link text-white"
              to="/sports/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sport
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link text-white"
              to="/politics/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Politics
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link text-white"
              to="/technologies/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Technology
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link text-white"
              to="/business/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Business
            </Link>
          </li>
          {props.isAuth === true ? (
            <li class="nav-item d-flex">
              <Link
                class="nav-link text-white"
                to="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {props.login}
              </Link>
              <Link
                class="nav-link text-white"
                to="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => Logout()}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li class="nav-item">
              {/* <Nav.Link href="/signIn">Login</Nav.Link> */}
              <Link
                class="nav-link text-white"
                to="/signIn"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sign In
              </Link>
            </li>
          )}
        </div>
        <form class="form-inline my-2 my-lg-0 mr-3">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-light text-white my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </ul>
    </div>
  );
}
