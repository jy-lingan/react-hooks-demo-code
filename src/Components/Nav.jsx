import React from 'react'
import { BiHome } from 'react-icons/bi'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><BiHome /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="https://es.reactjs.org/docs/hooks-intro.html"
                            target="_blank">
                            Documentación
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Nav
