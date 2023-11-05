import React from 'react';
class SearchBar extends React.Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}

export default SearchBar;