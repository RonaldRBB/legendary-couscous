import React from 'react';
class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar-main" className="navbar is-fixed-top">
                <div className="navbar-brand">
                    <a className="navbar-item is-hidden-desktop jb-aside-mobile-toggle">
                        <span className="icon">
                            <i className="mdi mdi-forwardburger mdi-24px" />
                        </span>
                    </a>
                    <div className="navbar-item has-control">
                        <div className="control">
                            <input placeholder="Search everywhere..." className="input" />
                        </div>
                    </div>
                </div>
                <div className="navbar-brand is-right">
                    <a
                        className="navbar-item is-hidden-desktop jb-navbar-menu-toggle"
                        data-target="navbar-menu"
                    >
                        <span className="icon">
                            <i className="mdi mdi-dots-vertical" />
                        </span>
                    </a>
                </div>
                <div className="navbar-menu fadeIn animated faster" id="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown has-dropdown-with-icons has-divider is-hoverable">
                            <a className="navbar-link is-arrowless">
                                <span className="icon">
                                    <i className="mdi mdi-menu" />
                                </span>
                                <span>Sample Menu</span>
                                <span className="icon">
                                    <i className="mdi mdi-chevron-down" />
                                </span>
                            </a>
                            <div className="navbar-dropdown">
                                <a href="profile.html" className="navbar-item">
                                    <span className="icon">
                                        <i className="mdi mdi-account" />
                                    </span>
                                    <span>My Profile</span>
                                </a>
                                <a className="navbar-item">
                                    <span className="icon">
                                        <i className="mdi mdi-settings" />
                                    </span>
                                    <span>Settings</span>
                                </a>
                                <a className="navbar-item">
                                    <span className="icon">
                                        <i className="mdi mdi-email" />
                                    </span>
                                    <span>Messages</span>
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    <span className="icon">
                                        <i className="mdi mdi-logout" />
                                    </span>
                                    <span>Log Out</span>
                                </a>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable">
                            <a className="navbar-link is-arrowless">
                                <div className="is-user-avatar">
                                    <img
                                        src="https://avatars.dicebear.com/v2/initials/john-doe.svg"
                                        alt="John Doe"
                                    />
                                </div>
                                <div className="is-user-name">
                                    <span>John Doe</span>
                                </div>
                                <span className="icon">
                                    <i className="mdi mdi-chevron-down" />
                                </span>
                            </a>
                            <div className="navbar-dropdown">
                                <a href="profile.html" className="navbar-item">
                                    <span className="icon">
                                        <i className="mdi mdi-account" />
                                    </span>
                                    <span>My Profile</span>
                                </a>
                                <a className="navbar-item">
                                    <span className="icon">
                                        <i className="mdi mdi-settings" />
                                    </span>
                                    <span>Settings</span>
                                </a>
                                <a className="navbar-item">
                                    <span className="icon">
                                        <i className="mdi mdi-email" />
                                    </span>
                                    <span>Messages</span>
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    <span className="icon">
                                        <i className="mdi mdi-logout" />
                                    </span>
                                    <span>Log Out</span>
                                </a>
                            </div>
                        </div>
                        <a
                            href="https://justboil.me/bulma-admin-template/free-html-dashboard/"
                            title="About"
                            className="navbar-item has-divider is-desktop-icon-only"
                        >
                            <span className="icon">
                                <i className="mdi mdi-help-circle-outline" />
                            </span>
                            <span>About</span>
                        </a>
                        <a title="Log out" className="navbar-item is-desktop-icon-only">
                            <span className="icon">
                                <i className="mdi mdi-logout" />
                            </span>
                            <span>Log out</span>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar