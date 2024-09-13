import React from "react";


const Navbar = ({ setCategory, history }) => {
  
  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = document.querySelector('input[type="search"]').value;
    history.push(`/search?q=${searchQuery}`);
  };
  
  return (
    <>
      <nav
        className="navbar navbar-expand-lg 
             navbar-dark bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            {" "}
            <span className="badge bg-light text-dark">ACONEWS</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  aria-current="page"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory("health")}
                >
                  Health
                </div>
              </li>

              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory("science")}
                >
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory("nation")}
                >
                  Nation
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleSearch}
              >
                <span className="badge outline-white text-white">Search</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
