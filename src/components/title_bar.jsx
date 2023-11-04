import React from 'react';
class TitleBar extends React.Component {
    render() {
        return (
            <section className="section is-title-bar">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <ul>
                                <li>Admin</li>
                                <li>Dashboard</li>
                            </ul>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <div className="buttons is-right">
                                <a
                                    href="https://github.com/vikdiesel/admin-one-bulma-dashboard"
                                    target="_blank"
                                    className="button is-primary"
                                >
                                    <span className="icon">
                                        <i className="mdi mdi-github-circle" />
                                    </span>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default TitleBar