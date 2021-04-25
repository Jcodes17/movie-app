import React from 'react';

export default class Stars extends React.Component {
    render() {
        return (
            <div>
                <div className="form-check form-check-inline">
                    <label>
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                        1 star
                    {/* <label className="form-check-label" for="inlineRadio1">1 star</label> */}
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <label>
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                        2 stars
                    </label>
                    {/* <label className="form-check-label" for="inlineRadio2">2 star</label> */}
                </div>
                <div className="form-check form-check-inline">
                    <label>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                    3 stars
                    </label>
                    {/* <label className="form-check-label" for="inlineRadio3">3 star</label> */}
                </div>
                <div className="form-check form-check-inline">
                    <label>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"></input>
                    4 stars
                    </label>
                    {/* <label className="form-check-label" for="inlineRadio4">4 star</label> */}
                </div>
                <div className="form-check form-check-inline">
                    <label>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"></input>
                    5 stars
                    </label>
                    {/* <label className="form-check-label" for="inlineRadio5">5 star</label> */}
                </div>
            </div>
        );
    }
}