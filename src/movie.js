import React from 'react';
import VoteButton from './vote-button';


export default class Movie extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="card border-dark col-6">
                        <div className="card-header">Gremlins</div>
                        <div className="card-body">
                            <img src="/images/Gremlins.jpg" width="150" height="200" alt=""></img>
                            <h3 className="card-title">Synopsis</h3>
                            <p className="card-text">A gadget salesman is looking for a special gift for his son and finds one at a store in Chinatown. 
                            The shopkeeper is reluctant to sell him the `mogwai' but sells it to him with the warning to never expose him to bright light, water, or to feed him after midnight. 
                            All of this happens and the result is a gang of gremlins that decide to tear up the town on Christmas Eve.</p>
                        </div>
                        <div className="card-footer">
                            <VoteButton />
                        </div>
                    </div>
                    <div className="card border-dark col-6">
                        <div className="card-header">Die Hard</div>
                        <div className="card-body">
                            <img src="/images/diehard.jpg" width ="150" height="200" alt=""></img>
                            <h3 className="card-title">Synopsis</h3>
                            <p className="card-text">New York City policeman John McClane (Bruce Willis) is visiting his estranged wife (Bonnie Bedelia) and two daughters on Christmas Eve. 
                                He joins her at a holiday party in the headquarters of the Japanese-owned business she works for. But the festivities are interrupted by a group of terrorists 
                                who take over the exclusive high-rise, and everyone in it. Very soon McClane realizes that there's no one to save the hostages -- but him.</p>
                        </div>
                        <div className="card-footer">
                            <VoteButton />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}