import React from 'react'

function Sidebar() {
  return (
    <div>{/* <!-- Vertical Navbar --> */}
    <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        
           <div>
            {/* <!-- Collapse --> */}
            <div className="collapse navbar-collapse" id="sidebarCollapse">
                {/* <!-- Navigation --> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="javascript(void)">
                            <i className="bi bi-house"></i> Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript(void)">
                            <i className="bi bi-bar-chart"></i> previous week report
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript(void)">
                            <i className="bi bi-chat"></i> previous month report
                        </a>
                    </li>     
                    <li className="nav-item">
                        <a className="nav-link" href="javascript(void)">
                            <i className="bi bi-people"></i> previous year report
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Sidebar