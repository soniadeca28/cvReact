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
                        <h5 className="grey-text text-lighten-3">Student</h5>

                        <p className="solid">
                            <a href="https://www.facebook.com/Sonii282312/" target="blank">
                                <i className="fab white-text fa-facebook-square fa-2x"></i>
                            </a>
                        <a href="https://github.com/soniadeca28" target="blank">
                            <i className="fab white-text fa-github-square fa-2x"></i>
                        </a>
                        <a className="item item-icon-right" href="https://www.linkedin.com/in/sonia-ariadna-deca-5649251bb/"
                           target="blank">
                            <i className="fab white-text text-lighten-1 fa-linkedin fa-2x"></i>
                        </a></p>
                    </div>
                </div>
                <div className="card blue darken-4 z-depth-0">

                <div className="card-content">
                    <h6 className="white-text">

                        <i className="fas fa-solid fa-user"></i>

                        <strong> Profile</strong>

                    </h6>

                    <hr/>

                    <p className="white-text text-lighten-3 pt">

                        Some of my strongest points are my colorful personality, well-rounded team
                        spirit and ability to adapt to new, unforeseen situations.
                        I chose this industry because it uninterruptedly challenges me.
                        My greatest passions are object-oriented programming and web design.


                    </p>



                </div>





                </div>
            </div>
        );
    }
}

export default Profile;