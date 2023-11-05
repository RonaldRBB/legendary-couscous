import React from 'react';
import GeneralDashboard from './general_dashboard';
import ExamplesTable from './examples_table';
import ExamplesForms from './examples_forms';
import ExamplesProfile from './examples_profile';
import ExamplesSubmenus from './examples_submenus';
import AboutGithub from './about_github';
import AboutAbout from './about_about';
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
                        <GeneralDashboard />
                    </ul>
                    <p className="menu-label">Examples</p>
                    <ul className="menu-list">
                        <ExamplesTable />
                        <ExamplesForms />
                        <ExamplesProfile />
                        <ExamplesSubmenus />
                    </ul>
                    <p className="menu-label">About</p>
                    <ul className="menu-list">
                        <AboutGithub />
                        <AboutAbout />
                    </ul>
                </div>
            </aside>
        );
    }
}
export default Aside