import React from 'react';
class AsideGeneralSubmenus extends React.Component {
    render() {
        return (
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
        );
    }
}
export default AsideGeneralSubmenus