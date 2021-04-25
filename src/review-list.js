import React from 'react';
import Review from './review';
import ReviewForm from './review-form';

export default class ReviewList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: props.content,
            starRating: props.starRating
        };
        this.addReview = this.addReview.bind(this);
    }
    addReview() {
        let reviews = [];
        if (this.state.reviews) {
            for (let review of this.state.reviews) {
                reviews.push(<Review {...review} />)
            };
        }    
    } //hard code a few reviews to test that it works properly
    render() {
        let reviewOne = {
            content: 'This is my review content again',
            starRating: '5'
        };
        let reviewTwo = {
            content: 'This is another review I am leaving for this movie',
            starRating: '2'
        }; //loop through the reviews and push them to array to be rendered as review below
        let reviews = [];
        if (this.state.reviews) {
            for (let review of this.state.reviews) {
                reviews.push(<Review {...review} />)
            }
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-6">
                        <div className="card-header">Gremlins Reviews</div>
                        <div className="card-body">
                            <h3 className="card-title">Review this movie:</h3>
                            <div><ReviewForm /></div>
                            <div className="card-text">
                                <Review {...reviewOne} />
                                <br/>
                                <Review {...reviewTwo} />
                            </div>
                        </div>
                    </div>
                    <div className="card col-6">
                        <div className="card-header">Die Hard Reviews</div>
                        <div className="card-body">
                            <h3 className="card-title">Review this movie:</h3>
                            <div><ReviewForm addReview={this.addReview} {...reviews}/></div>
                            <div className="card-body">
                                <Review />
                            </div>
                            <p className="card-text">
                                {this.state.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}    
