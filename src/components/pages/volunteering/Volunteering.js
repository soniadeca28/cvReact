import React, {Component} from 'react';

class Volunteering extends Component {
    render() {
        return (
            <div>
                <div className="card z-depth-0">

                    <div className="card-content">

                        <h6>

                            <strong><i className="fas fa-solid fa-laptop-code"/> Volunteering </strong>

                        </h6>


                        <hr/>

                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>

                                    <h6>

                                        I volunteered all throughout my high school years. Spending so much of my time surrounded
                                            by inspiring, empowering people shaped me into the person I am today. It helped me
                                            improve my communication, problem solving and teamwork skills,
                                            challenging me to become a better version of myself.

                                    </h6>

                                    <br/>

                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            <text style={{fontWeight: "bold"}}>
                                            Interact Resita
                                            </text>
                                        </strong>
                                        <span> 2014 - 2018 </span>
                                    </h6>

                                    <br/>

                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            <text style={{fontWeight: "bold"}}>
                                            WWF Resita
                                            </text>
                                        </strong>
                                        <span> 2016 - 2017 </span>
                                    </h6>

                                </blockquote>
                            </div>
                        </div>


                    </div>

                </div>


            </div>
        );
    }
}

export default Volunteering;