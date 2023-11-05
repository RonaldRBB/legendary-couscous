import React from 'react';
import CardPerformance from './cards/performance';
import Clients from './cards/clients';
import Tile from './tiles/tile';
class Main extends React.Component {
    tilesList() {
        return [
            {
                title: "Clients",
                icon: "mdi mdi-account-multiple",
                color: "has-text-primary",
                value: "512"
            },
            {
                title: "Sales",
                icon: "mdi mdi-cart-outline",
                color: "has-text-info",
                value: "$7,770"
            },
            {
                title: "Performance",
                icon: "mdi mdi-finance",
                color: "has-text-success",
                value: "256%"
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