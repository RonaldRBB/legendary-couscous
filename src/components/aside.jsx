import React from 'react';
class Aside extends React.Component {
    render() {        
        return (
            <aside className="aside is-placed-left is-expanded">
                <div className="aside-tools">
                    <div className="aside-tools-label">
                        <span>
                            <b>Admin</b> One HTML
                        </span>
                    </div>
                </div>
                <div className="menu is-menu-main">
                    <p className="menu-label">General</p>
                    <ul className="menu-list">
                        <li>
                            <a href="index.html" className="is-active router-link-active has-icon">
                                <span className="icon">
                                    <i className="mdi mdi-desktop-mac" />
                                </span>
                                <span className="menu-item-label">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    <p className="menu-label">Examples</p>
                    <ul className="menu-list">
                        <li>
                            <a href="tables.html" className="has-icon">
                                <span className="icon has-update-mark">
                                    <i className="mdi mdi-table" />
                                </span>
                                <span className="menu-item-label">Tables</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms.html" className="has-icon">
                                <span className="icon">
                                    <i className="mdi mdi-square-edit-outline" />
                                </span>
                                <span className="menu-item-label">Forms</span>
                            </a>
                        </li>
                        <li>
                            <a href="profile.html" className="has-icon">
                                <span className="icon">
                                    <i className="mdi mdi-account-circle" />
                                </span>
                                <span className="menu-item-label">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a className="has-icon has-dropdown-icon">
                                <span className="icon">
                                    <i className="mdi mdi-view-list" />
                                </span>
                                <span className="menu-item-label">Submenus</span>
                                <div className="dropdown-icon">
                                    <span className="icon">
                                        <i className="mdi mdi-plus" />
                                    </span>
                                </div>
                            </a>
                            <ul>
                                <li>
                                    <a href="#void">
                                        <span>Sub-item One</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#void">
                                        <span>Sub-item Two</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p className="menu-label">About</p>
                    <ul className="menu-list">
                        <li>
                            <a
                                href="https://github.com/vikdiesel/admin-one-bulma-dashboard"
                                target="_blank"
                                className="has-icon"
                            >
                                <span className="icon">
                                    <i className="mdi mdi-github-circle" />
                                </span>
                                <span className="menu-item-label">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://justboil.me/bulma-admin-template/free-html-dashboard/"
                                className="has-icon"
                            >
                                <span className="icon">
                                    <i className="mdi mdi-help-circle" />
                                </span>
                                <span className="menu-item-label">About</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}
export default Aside