import React from 'react';
import TileClients from './tile_clients';
import TileSales from './tile_sales';
import TilePerformance from './tile_performance';
import CardPerformance from './card_performance';
import CardClients from './card_clients';
class Main extends React.Component {
    render() {
        return (
            <section className="section is-main-section">
                <div className="tile is-ancestor">
                    <TileClients />
                    <TileSales />
                    <TilePerformance />
                </div>
                <CardPerformance />
                <CardClients />
            </section>
        );
    }
}
export default Main