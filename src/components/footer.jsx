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
                                <a href="https://github.com/vikdiesel/admin-one-bulma-dashboard" style={{ height: 20 }}>
                                    <img src="https://colorineseducacion.com/wp-content/uploads/2016/04/dummy-post-square-1-2.jpg" style={{ height: 20 }} alt='logo' />
                                </a>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="logo">
                                    <a href="https://github.com/vikdiesel/admin-one-bulma-dashboard" style={{ height: 20 }}>
                                        <img src="https://colorineseducacion.com/wp-content/uploads/2016/04/dummy-post-square-1-2.jpg" style={{ height: 20 }} alt='logo' />
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