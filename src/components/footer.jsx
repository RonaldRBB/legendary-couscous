import React from 'react';
class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">© 2020, JustBoil.me</div>
                            <div className="level-item">
                                <a
                                    href="https://github.com/vikdiesel/admin-one-bulma-dashboard"
                                    style={{ height: 20 }}
                                >
                                    <img src="https://img.shields.io/github/v/release/vikdiesel/admin-one-bulma-dashboard?color=%23999" />
                                </a>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="logo">
                                    <a href="https://justboil.me">
                                        <img src="img/justboil-logo.svg" alt="JustBoil.me" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer