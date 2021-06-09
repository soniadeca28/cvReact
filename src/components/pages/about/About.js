import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="card z-depth-0 hide-on-med-and-down pt">

                    <div className="card-content social">

                    <h2 className="grey-text text-darken-3">

                        <strong>Sonia-Ariadna Deca</strong>

                    </h2>

                        <h5 className="grey-text text-darken-2">Student</h5>

                        <p className="solid">
                            <a href="https://www.facebook.com/Sonii282312/" target="blank">
                                <i className="fab blue-text text-darken-4 fa-facebook-square fa-2x"></i>
                            </a>
                            <a href="https://github.com/soniadeca28" target="blank">
                                <i className="fab blue-text text-darken-4 fa-github-square fa-2x"></i>
                            </a>
                            <a className="item item-icon-right" href="https://www.linkedin.com/in/sonia-ariadna-deca-5649251bb/"
                               target="blank">
                                <i className="fab blue-text text-darken-4 text-lighten-1 fa-linkedin fa-2x"></i>
                            </a></p>

                    </div>

                </div>
            </div>
        );
    }
}

export default About;