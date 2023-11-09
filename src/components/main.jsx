import React from 'react';
import CardPerformance from './cards/performance';
import Clients from './cards/clients';
import Tile from './tiles/tile';
class Main extends React.Component {
    tilesList() {
        return [
            {
                title: "Heart Rate",
                icon: "mdi mdi-heart-pulse",
                color: "has-text-danger",
                value: "76 bpm"
            },
            {
                title: "Calories",
                icon: "mdi mdi-fire",
                color: "has-text-warning",
                value: "2200 kCal"
            },
            {
                title: "Weight",
                icon: "mdi mdi-scale-bathroom",
                color: "has-text-info",
                value: "21.1 kg"
            },
            {
                title: "BMI",
                icon: "mdi mdi-weight",
                color: "has-text-success",
                value: "21.1"
            }
        ]
    }
    render() {
        return (
            <section className="section is-main-section">
                <div className="tile is-ancestor">
                    {this.tilesList().map(tile =>
                        <Tile
                            title={tile.title}
                            icon={tile.icon}
                            color={tile.color}
                            value={tile.value}
                        />)}
                </div>
                <CardPerformance />
                <Clients />
            </section>
        );
    }
}
export default Main