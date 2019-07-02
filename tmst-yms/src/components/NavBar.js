// Navbar.js

import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#tmstrailers">View Schedule</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;