import React from 'react';
class CardPerformance extends React.Component {
    render() {
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        <span className="icon">
                            <i className="mdi mdi-finance" />
                        </span>
                        Performance
                    </p>
                    <a href="#" className="card-header-icon">
                        <span className="icon">
                            <i className="mdi mdi-reload" />
                        </span>
                    </a>
                </header>
                <div className="card-content">
                    <div className="chart-area">
                        <div style={{ height: "100%" }}>
                            <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                    <div />
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                    <div />
                                </div>
                            </div>
                            <canvas
                                id="big-line-chart"
                                width={2992}
                                height={1000}
                                className="chartjs-render-monitor"
                                style={{ display: "block", height: 400, width: 1197 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardPerformance