import React from 'react';
class Tile extends React.Component {
    render() {
        return (
            <div className="tile is-parent">
                <div className="card tile is-child">
                    <div className="card-content">
                        <div className="level is-mobile">
                            <div className="level-item">
                                <div className="is-widget-label">
                                    <h3 className="subtitle is-spaced">{this.props.title}</h3>
                                    <h1 className="title">{this.props.value}</h1>
                                </div>
                            </div>
                            <div className="level-item has-widget-icon">
                                <div className="is-widget-icon">
                                    <span className={"icon " + this.props.color + " is-large"}>
                                        <i className={this.props.icon + " mdi-48px"} />
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
export default Tile