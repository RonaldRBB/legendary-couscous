import React from 'react';
import AsideGeneralDashboard from './aside_general_dashboard';
import AsideexamplesTable from './aside_examples_table';
import AsideExamplesForms from './aside_examples_forms';
import AsideExamplesProfile from './aside_examples_profile';
import AsideExamplesSubmenus from './aside_examples_submenus';
import AsideAboutGithub from './aside_about_github';
import AsideAboutAbout from './aside_about_about';
class Aside extends React.Component {
    render() {
        return (
            <aside className="aside is-placed-left is-expanded">
                <div className="aside-tools">
                    <div className="aside-tools-label">
                        <span>
                            <b>Admin</b> One HTML
                        </span>
                    </div>
                </div>
                <div className="menu is-menu-main">
                    <p className="menu-label">General</p>
                    <ul className="menu-list">
                        <AsideGeneralDashboard />
                    </ul>
                    <p className="menu-label">Examples</p>
                    <ul className="menu-list">
                        <AsideexamplesTable />
                        <AsideExamplesForms />
                        <AsideExamplesProfile />
                        <AsideExamplesSubmenus />
                    </ul>
                    <p className="menu-label">About</p>
                    <ul className="menu-list">
                        <AsideAboutGithub />
                        <AsideAboutAbout />
                    </ul>
                </div>
            </aside>
        );
    }
}
export default Aside