import React from 'react';
//import ReviewList from './review-list';
import Stars from './stars';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        //declare the state
        this.state = {
            content: '',
            starRating: ''
        }; //bind state to methods that follow, so we can handle change in state
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //handle state change in content of review
    handleContentChange(event) {
        this.setState({ content: event.target.value });
    }
    //handle state change in star rating of review
    handleRatingChange(event) {
        this.setState({ starRating: event.target.value });
    }
    //submit changes 
    handleSubmit(event) {//addReview not declared variable//
        this.props.addReview(event, this.props.data, { content: this.state.content, starRating: this.state.starRating });
        this.setState({ content: '', starRating: '' });
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <div className="mb-3">
                    <label className="form-label">Please select how many stars you would give this movie.</label> {/* for="FormControlInput1" */}
                    <Stars {...this.state.starRating} onChange={this.state.handleRatingChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Write your review here:</label> {/* for="FormControlInput1" */}
                    <textarea className="form-control" value={this.state.value} onChange={this.handleContentChange} rows="3"></textarea>  {/* onChange was set to "this.state.handleContentChange" */}
                </div>
                <button className="btn btn-primary" onClick={this.state.handleSubmit}>Submit review</button>
            </form>
        );
    }
}


