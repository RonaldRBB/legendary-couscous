import React from 'react';
import Li from './li';
class Aside extends React.Component {
    list() {
        const menuList =
        {
            general: [{
                name: 'Dashboard',
                icon: 'mdi mdi-desktop-mac',
                link: 'index.html',
            }],
            examples: [{
                name: 'Tables',
                icon: 'mdi mdi-table',
                link: 'tables.html',
            }, {
                name: 'Forms',
                icon: 'mdi mdi-square-edit-outline',
                link: 'forms.html',
            }, {
                name: 'Profile',
                icon: 'mdi mdi-account-circle',
                link: 'profile.html',
            }
            ],
            about: [{
                name: 'About',
                icon: 'mdi mdi-help-circle',
                link: 'https://justboil.me/bulma-admin-template/free-html-dashboard/',
            }, {
                name: 'GitHub',
                icon: 'mdi mdi-github-circle',
                link: 'https://github.com/vikdiesel/admin-one-bulma-dashboard',
            }]
        };
        return menuList;
    }
    render() {
        return (
            <aside className="aside is-placed-left is-expanded" >
                <div className="aside-tools">
                    <div className="aside-tools-label">
                        <span>
                            <b>Admin</b> One HTML
                        </span>
                    </div>
                </div>
                <div className="menu is-menu-main">
                    {
                        Object.keys(this.list()).map(category =>
                            <>
                                <p className="menu-label">{category}</p>
                                <ul className="menu-list">
                                    {this.list()[category].map(item =>
                                        <Li name={item.name} icon={item.icon} link={item.link} />
                                    )}
                                </ul>
                            </>
                        )
                    }
                </div>
            </aside >
        );
    }
}
export default Aside