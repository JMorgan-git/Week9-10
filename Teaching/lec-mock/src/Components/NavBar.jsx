import React from "react";

const NavBar = () => {
    return(
        <div className="nav--container">
            <table>
                <th><a href="index.html"><button>Home</button></a></th>
                <th><a href="page2.html"><button>Page2</button></a> </th>
                <th><a href="page3.html"><button>Page3</button></a></th>
                <th><a href="contacts.html"><button>Contacts</button></a></th>
            </table>
        </div>
    )
}

export default NavBar;