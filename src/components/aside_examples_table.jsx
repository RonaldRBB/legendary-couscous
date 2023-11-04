import React from 'react';
class AsideGeneralTable extends React.Component {
    render() {
        return (
            <li>
                <a href="tables.html" className="has-icon">
                    <span className="icon has-update-mark">
                        <i className="mdi mdi-table" />
                    </span>
                    <span className="menu-item-label">Tables</span>
                </a>
            </li>
        );
    }
}
export default AsideGeneralTable