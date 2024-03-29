import React, {Component} from 'react';
import Profile from "../pages/profile/Profile";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Digital from "../pages/digital/Digital";
import Education from "../pages/education/Education";
import Projects from "../pages/projects/Projects"
import Language from "../pages/language/Language"
import Hobbies from "./hobbies/Hobbies";
import Certificates from "./certificates/Certificates";
import Courses from "./courses/Courses";
import Volunteering from "./volunteering/Volunteering";
import Experience from "./experience/Experience";
import '../../Home.css'

class Home extends Component {
    render() {
        return (

            <section>
                <div className="row sameHeight">
                    <div className="col s12 m12 l4 blue darken-4 sameHeight_child">
                        <Profile/>
                        <Contact/>
                        <Digital/>
                        <Language/>
                        <Certificates/>
                        <Hobbies/>

                    </div>
                    <div className="col s12 m12 l8 white lighten-5 sameHeight_child">
                        <About/>
                        <Experience/>
                        <Education/>
                        <Courses/>
                        <Projects/>
                        <Volunteering/>

                    </div>
                </div>
            </section>

        );
    }
}

export default Home;
