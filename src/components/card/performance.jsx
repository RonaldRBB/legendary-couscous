import React from 'react';
import Header from './header';
class CardPerformance extends React.Component {
    render() {
        return (
            <div className="card">
                <Header name="Performance" link="#" />
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