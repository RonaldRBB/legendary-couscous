import React from 'react';
import Header from './header';
import Pagination from './pagination';
class Clients extends React.Component {
    tableRow(person) {
        return (
            <tr>
                <td className="is-image-cell">
                    <div className="image">
                        <img src={person.avatar} className="is-rounded" alt="avatar" />
                    </div>
                </td>
                <td data-label="Name">{person.name}</td>
                <td data-label="Company">{person.company}</td>
                <td data-label="City">{person.city}</td>
                <td data-label="Progress" className="is-progress-cell">
                    <progress
                        max={100}
                        className="progress is-small is-primary"
                        value={person.progress}
                    >
                        {person.progress}
                    </progress>
                </td>
                <td data-label="Created"> {person.created}</td>
                <td className="is-actions-cell">
                    <div className="buttons is-right">
                        <button className="button is-small is-primary" type="button">
                            <span className="icon"><i className="mdi mdi-eye" /></span>
                        </button>
                        <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                            <span className="icon"><i className="mdi mdi-trash-can" /></span>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
    columnsNames() {
        return ['', 'Name', 'Company', 'City', 'Progress', 'Created', ''];
    }
    personList() {
        return [
            {
                name: 'Rebecca Bauch',
                company: 'Daugherty-Daniel',
                city: 'South Cory',
                progress: 79,
                created: 'Oct 25, 2020',
                avatar: 'https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg'
            },
            {
                name: 'Felicita Yundt',
                company: 'Johns-Weissnat',
                city: 'East Ariel',
                progress: 67,
                created: 'Jan 8, 2020',
                avatar: 'https://avatars.dicebear.com/v2/initials/felicita-yundt.svg'
            },
            {
                name: 'Mr. Larry Satterfield V',
                company: 'Hyatt Ltd',
                city: 'Windlerburgh',
                progress: 16,
                created: 'Dec 18, 2020',
                avatar: 'https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg'
            },
            {
                name: 'Mr. Broderick Kub',
                company: 'Kshlerin, Bauch and Ernser',
                city: 'New Kirstenport',
                progress: 71,
                created: 'Sep 13, 2020',
                avatar: 'https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg'
            },
            {
                name: 'Barry Weber',
                company: 'Schulist, Mosciski and Heidenreich',
                city: 'East Violettestad',
                progress: 80,
                created: 'Jul 24, 2020',
                avatar: 'https://avatars.dicebear.com/v2/initials/barry-weber.svg'
            },
            {
                name: 'Bert Kautzer MD',
                company: 'Gerhold and Sons',
                city: 'Mayeport',
                progress: 62,
                created: 'Mar 30, 2020',
                avatar: 'https://avatars.dicebear.com/v2/initials/bert-kautzer-md.svg'
            }, {
                name: 'Lonzo Steuber',
                company: 'Skiles Ltd',
                city: 'Marilouville',
                progress: 17,
                created: 'Feb 12, 2020',
                avatar: 'https://avatars.dicebear.com/v2/initials/lonzo-steuber.svg'
            },
            {
                name: 'Jonathon Hahn',
                company: 'Flatley Ltd',
                city: 'Billiemouth',
                progress: 74,
                created: 'Dec 30, 2020',
                avatar: 'https://avatars.dicebear.com/v2/initials/jonathon-hahn.svg'
            },
            {
                name: 'Ryley Wuckert',
                company: 'Heller-Little',
                city: 'Emeraldtown',
                progress: 54,
                created: 'Jun 28, 2020',
                avatar: 'https://avatars.dicebear.com/v2/initials/ryley-wuckert.svg'
            },
            {
                name: 'Sienna Hayes',
                company: 'Conn, Jerde and Douglas',
                city: 'Jonathanfort',
                progress: 55,
                created: 'Mar 7, 2020',
                avatar: 'https://avatars.dicebear.com/v2/initials/sienna-hayes.svg'
            }
        ]
    }
    render() {
        return (
            <div className="card has-table has-mobile-sort-spaced">
                <Header name="Clients" link="#" />
                <div className="card-content">
                    <div className="b-table has-pagination">
                        <div className="table-wrapper has-mobile-cards">
                            <table className="table is-fullwidth is-striped is-hoverable is-sortable is-fullwidth">
                                <thead>
                                    <tr>
                                        {this.columnsNames().map((name, index) => {
                                            return <th key={index}>{name}</th>;
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.personList().map(person => {
                                        return this.tableRow(person);
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Pagination numPages={[1, 2, 3, 6]} />
                    </div>
                </div>
            </div >
        );
    }
}
export default Clients