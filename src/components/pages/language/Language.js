import React, {Component} from 'react';

class Language extends Component {
    render() {
        return (
            <div>

                <div className="card blue darken-4 z-depth-0">

                    <div className="card-content">

                        <h6 className="white-text">

                            <i class="fas fa-solid fa-comment"></i>

                            <strong> Language Skills </strong>





                        <hr/>

                        <div className="row pt">
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3">
                                    Romanian
                                </p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '100%'}}></div>
                                </div>
                            </div>


                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3">
                                    English

                                    <span> - C1 </span>

                                </p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '95%'}}></div>
                                </div>
                            </div>
                        </div>


                        <div className="row pt">
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3">
                                    German
                                    <span> - A1 </span>
                                </p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '20%'}}></div>
                                </div>
                            </div>
                        </div>

                        <h6 className="white-text">

                            <p>
                                <strong>Levels</strong>
                            </p>
                            <br/>
                            <p>A1, A2: Basic user </p>
                            <br/>
                            <p>B1, B2: Independent user</p>
                            <br/>
                            <p>C1, C2: Proficient user</p>

                        </h6>


                        </h6>
                    </div>

                </div>

            </div>
        );
    }
}

export default Language;