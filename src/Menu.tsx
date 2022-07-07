export default function Menu(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">FilmwebClone</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-time">
                            <a className="nav-link" href="/genres">
                                Genres
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}