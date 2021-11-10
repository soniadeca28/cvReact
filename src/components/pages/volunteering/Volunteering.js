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

                                    <p>
                                        I volunteered all throughout my high school years and
                                        managed to gain great communication and teamwork skills through my experience at Interact and WWF.
                                    </p>

                                    <br/>

                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            Interact Resita
                                        </strong>
                                        <span> 2014 - 2018 </span>
                                    </h6>

                                    <br/>

                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            WWF Resita
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