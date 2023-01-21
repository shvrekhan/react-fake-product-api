import React from "react";
import "./Navbar.css"

class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className="nav-parent">
                    <div className="nav-logo">Fake store</div>
                    <div className="nav-list">
                        <ul className="nav-list-parent">
                            <li className="nav-list-item">products</li>
                            <li className="nav-list-item">Users</li>
                            <li className="nav-list-item">Login</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;