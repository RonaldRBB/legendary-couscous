import React from 'react';
class Pagination extends React.Component {
    render() {
        return (
            <div className='notification'>
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <div className="buttons has-addons">
                                {this.props.numPages.map(num => {
                                    return (
                                        <button
                                            type="button"
                                            className="button">
                                            {num}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pagination