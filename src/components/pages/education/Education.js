import React, {Component} from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <div className="card z-depth-0">

                    <div className="card-content">

                        <h6>

                            <strong><i class="fas fa-graduation-cap"></i>
                                Education
                            </strong>

                        </h6>


                        <hr/>

                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            <text style={{fontWeight: "bold"}}>
                                            University
                                            </text>
                                        </strong>
                                        <span> 2018 - present </span>
                                    </h6>
                                    <p>Polytechnic University of Timisoara-Faculty of Automation and Computers</p>

                                    <br/>

                                    <p>
                                        <strong>Field of study </strong>
                                    </p>

                                    <p>Computers and Information Technology</p>






                                </blockquote>
                            </div>
                        </div>



                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            <text style={{fontWeight: "bold"}}>
                                            High School
                                            </text>
                                        </strong>
                                        <span> 2014 - 2018  </span>
                                    </h6>
                                    <p>
                                        "Traian Lalescu" National College, Resita
                                    </p>

                                    <br/>

                                    <p>
                                        <strong>Field of study </strong>
                                    </p>

                                    <p>Mathematics and Informatics</p>

                                    <br/>

                                    <p>
                                        <strong>Baccalaureate</strong>
                                    </p>

                                    <p>Grade 10 out of 10 in Mathematics </p>
                                    <p> Grade 9.5 out of 10 in Informatics</p>

                                </blockquote>
                            </div>
                        </div>




                    </div>

                </div>
            </div>
        );
    }
}

export default Education;