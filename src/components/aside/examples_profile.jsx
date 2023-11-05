import React from 'react';
class AsideGeneralProfile extends React.Component {
    render() {
        return (
            <li>
                <a href="profile.html" className="has-icon">
                    <span className="icon">
                        <i className="mdi mdi-account-circle" />
                    </span>
                    <span className="menu-item-label">Profile</span>
                </a>
            </li>
        );
    }
}
export default AsideGeneralProfile