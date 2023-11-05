import React from 'react';
class Li extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.link} className="router-link-active has-icon">
                    <span className="icon">
                        <i className={this.props.icon} />
                    </span>
                    <span className="menu-item-label">{this.props.name}</span>
                </a>
            </li>
        );
    }
}
export default Li;
