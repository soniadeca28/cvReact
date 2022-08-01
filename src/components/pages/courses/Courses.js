import React, {Component} from 'react';

class Courses extends Component {
    render() {
        return (
            <div>


                <div className="card z-depth-0">

                    <div className="card-content">

                        <h6>

                            <strong><i class="fas fa-solid fa-star"></i> Courses & Labs</strong>

                        </h6>


                        <hr/>

                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            <text style={{fontWeight: "bold"}}>
                                            Nokia C++ Course
                                            </text>
                                        </strong>
                                        <span> 04/03/2021 – 13/05/2021  </span>
                                    </h6>

                                    <br/>
                                    <p><strong>Highlights of the course : </strong> </p>
                                    <br/>
                                    <p> -General OOP concepts</p>
                                    <p>-STL</p>
                                    <p>-Smart Pointers</p>
                                    <p>-A few design patterns</p>
                                    <br/>
                                    <p><strong>Final grade: 9.5</strong></p>



                                </blockquote>
                            </div>
                        </div>


                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            <text style={{fontWeight: "bold"}}>
                                            Liga AC Labs - Bitdefender - Introduction to Cyber Security
                                            </text>
                                        </strong>
                                        <span> 07/04/2021 – 05/06/2021 </span>
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

export default Courses;