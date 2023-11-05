import React from 'react';
class AsideAboutGithub extends React.Component {
    render() {
        return (
            <li>
                <a
                    href="https://ronaldrbb.github.io/RonaldRBB/"
                    target="_blank"
                    className="has-icon"
                >
                    <span className="icon">
                        <i className="mdi mdi-github-circle" />
                    </span>
                    <span className="menu-item-label">GitHub</span>
                </a>
            </li>
        );
    }
}
export default AsideAboutGithub