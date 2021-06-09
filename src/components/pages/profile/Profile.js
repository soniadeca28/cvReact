import React, {Component} from 'react';
import ImgProfile from "../../images/eu_frumos.jpg";

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="avatarImg">
                    <img className="circle responsive-img"
                         src={ImgProfile}
                         alt="Sonia-Ariadna Deca"
                    />
                </div>
                <div className="card blue darken-4 z-depth-0 hide-on-large-only">
                    <div className="card-content center social">
                        <h2 className="white-text text-darken-3">
                            <strong>
                                Sonia-Ariadna Deca
                            </strong>
                        </h2>
                        <h5 className="white-text text-darken-3">Student</h5>

                        <p className="solid">
                            <a href="https://www.facebook.com/Sonii282312/" target="blank">
                                <i className="fab white-text fa-facebook-square fa-2x"></i>
                            </a></p>
                        <a href="https://github.com/soniadeca28" target="blank">
                            <i className="fab white-text fa-github-square fa-2x"></i>
                        </a>
                        <a className="item item-icon-right" href="https://www.linkedin.com/in/sonia-ariadna-deca-5649251bb/"
                           target="blank">
                            <i className="fab white-text text-lighten-1 fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="card blue darken-4 z-depth-0">







                </div>
            </div>
        );
    }
}

export default Profile;