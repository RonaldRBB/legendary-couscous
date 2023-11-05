import React from 'react';
class Header extends React.Component {
    render() {
        return (
            <header className="card-header">
                <p className="card-header-title">
                    <span className="icon">
                        <i className="mdi mdi-account-multiple" />
                    </span>
                    {this.props.name}
                </p>
                <a href={this.props.link} className="card-header-icon">
                    <span className="icon">
                        <i className="mdi mdi-reload" />
                    </span>
                </a>
            </header>
        );
    }
}
export default Header