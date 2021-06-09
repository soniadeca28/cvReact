import React, {Component} from 'react';

class Courses extends Component {
    render() {
        return (
            <div>


                <div className="card z-depth-0">

                    <div className="card-content">

                        <h6>

                            <strong><i class="fas fa-solid fa-laptop-code"></i> Courses & Labs</strong>

                        </h6>


                        <hr/>

                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            Nokia C++ Course
                                        </strong>
                                        <span> 04/03/2021 – 13/05/2021  </span>
                                    </h6>

                                    <br/>
                                    <p><strong>The course covered : </strong> </p>
                                    <br/>
                                    <p> -General OOP concepts</p>
                                    <p> -C++11 new features</p>
                                    <p>-STL</p>
                                    <p>-STL Algorithms</p>
                                    <p>-Smart Pointers</p>
                                    <p>-Templates</p>
                                    <p>-Design Patterns</p>
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
                                            Liga AC Labs - Bitdefender - Introduction to Cyber Security
                                        </strong>
                                        <span> 07/04/2021 – 05/06/2021 </span>
                                    </h6>

                                    <br/>
                                    <p><strong>The lab covered : </strong> </p>
                                    <br/>
                                    <p> -Windows program analysis</p>
                                    <p> -Exploits of Windows programs</p>
                                    <p>-Virus scan</p>
                                    <p>-Android application analysis</p>
                                    <p>-Attacks against Android users</p>
                                    <p>-Operating systems architecture ( Linux, Windows, Android)</p>
                                    <p>-Capture the Flag, CrackMe</p>
                                    <br/>



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