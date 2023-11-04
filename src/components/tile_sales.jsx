import React from 'react';
class TileSales extends React.Component {
    render() {
        return (
            <div className="tile is-parent">
                <div className="card tile is-child">
                    <div className="card-content">
                        <div className="level is-mobile">
                            <div className="level-item">
                                <div className="is-widget-label">
                                    <h3 className="subtitle is-spaced">Sales</h3>
                                    <h1 className="title">$7,770</h1>
                                </div>
                            </div>
                            <div className="level-item has-widget-icon">
                                <div className="is-widget-icon">
                                    <span className="icon has-text-info is-large">
                                        <i className="mdi mdi-cart-outline mdi-48px" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TileSales