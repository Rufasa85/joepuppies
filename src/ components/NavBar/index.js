import React from 'react'
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Link to="/">About</Link>
            <Link to="/discover">Discover</Link>
            <Link to="/search">Search</Link>
        </div>
    )
}
