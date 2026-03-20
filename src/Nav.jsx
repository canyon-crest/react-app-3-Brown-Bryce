import "./Nav.css"

function Nav({ setPage }){
    return(
        <div>
            <ul>
                <li onClick={() => setPage("Home")}>Home</li>
                <li onClick={() => setPage("About")}>Equations</li>
                <li onClick={() => setPage("Contact")}>Contact</li>
                <li onClick={() => setPage("New")}>New</li>
            </ul>
        </div>
    )

}

export default Nav
