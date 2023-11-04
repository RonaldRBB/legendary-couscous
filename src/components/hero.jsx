import React from 'react';
class Hero extends React.Component {
    render() {
        return (
            <section className="hero is-hero-bar">
                <div className="hero-body">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <h1 className="title">Dashboard</h1>
                            </div>
                        </div>
                        <div className="level-right" style={{ display: "none" }}>
                            <div className="level-item" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Hero