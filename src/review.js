import React from 'react';

export default class Review extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.starRating}
                </div>
                <div className="card-body">
                    {this.props.content}
                </div>
                <div className="card-footer">
                </div>
            </div>
        );
    }
}