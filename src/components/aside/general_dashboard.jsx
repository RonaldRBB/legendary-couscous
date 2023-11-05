import React from 'react';
class AsideGeneralDashboard extends React.Component {
    render() {
        return (
            <li>
                <a href="index.html" className="is-active router-link-active has-icon">
                    <span className="icon">
                        <i className="mdi mdi-desktop-mac" />
                    </span>
                    <span className="menu-item-label">Dashboard</span>
                </a>
            </li>
        );
    }
}
export default AsideGeneralDashboard