import React, {Component} from 'react';

class Projects extends Component {
    render() {
        return (
            <div>


                <div className="card z-depth-0">

                    <div className="card-content">

                        <h6>

                            <strong><i className="fas fa-solid fa-laptop-code"></i> Projects </strong>

                        </h6>


                        <hr/>

                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            <text style={{fontWeight: "bold"}}>
                                            Irrigation System - Arduino Project with Mobile App
                                            </text>
                                        </strong>
                                        <span> 2021 </span>
                                    </h6>

                                    <br/>

                                    <p>

                                        The system measures the soil moisture and automatically waters it when dry.
                                        <br/> <br/>
                                        For this project, my colleagues and I used:
                                        <br/>
                                        -2x Arduino Uno <br/>
                                        -3x soil moisture sensor <br/>
                                        -1x temperature and humidity sensor <br/>
                                        -1x water level sensor <br/>
                                        -1x light sensor <br/>
                                        -1x water pump <br/>
                                        -1x DC gear motor ( as we needed it to rotate both ways, we made an H-bridge circuit using NPN transistors) <br/>
                                        -1x fan (computer fan) --> For mixing the air ( helps the plants absorb more CO2). Every time a plant is watered, the fan
                                        will also be turned on. <br/>
                                        -1x NodeMCU <br/> <br/>
                                        -Mobile app to track : <br/>
                                        Temperature --> normal between 18 and 35 <br/>
                                        Humidity --> normal between 40 and 90 <br/>
                                        Soil Humidity sensors --> depends on the plant type <br/>
                                        Lighting ---> if there is light -> "Normal" , if there is no light -> "No light" <br/>
                                        Water Level --> if the water level sensor tracks values below a certain min value, the message " water level TOO
                                        LOW" will appear <br/>
                                        The mobile app also lets you choose a plant profile (for example, cactus/orchid/carnivorous plant) and modifies the
                                        watering plan according to the plant type. <br/>

                                    </p>

                                    <br/>

                                    <p>
                                        Github link:&nbsp;
                                        <a>
                                            https://github.com/Dragos2099/PlantInatorV2
                                        </a>
                                    </p>

                                    <br/>

                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            <text style={{fontWeight: "bold"}}>
                                                A Place For Paws - Mobile App
                                            </text>
                                        </strong>
                                        <span> 2022 </span>
                                    </h6>

                                    <br/>

                                    <p>
                                        This mobile app was developed using 100% Java programming language.
                                        <br/>
                                        A Place For Paws aims to facilitate pet adoption. In the app, by creating an account,
                                        users can both search for a pet by browsing the ads posted and give a pet up for adoption.
                                        Users browse through the page with the ads, and if they are interested in a pet they can
                                        access a page with additional details. On this page the pet's current city
                                        and the owner's contact details can be found. If the user wants to find a pet nearby, they can set the
                                        location filter and only ads from the same city as the user will appear. A user can also
                                        add an ad, at which point the application accesses the location and stores it in the database.
                                        After posting the ad, it can be seen both in the navigation page and in the page with all the
                                        ads of the current user.
                                    </p>

                                    <br/>

                                    <p>
                                                Github link:&nbsp;
                                        <a>
                                            https://github.com/soniadeca28/APlaceForPaws
                                        </a>
                                    </p>

                                    <br/>

                                    <h6 className="no-pad mt-bottom">
                                        <strong>
                                            <text style={{fontWeight: "bold"}}>
                                                SnackInator - Arduino Project with Mobile App
                                            </text>
                                        </strong>
                                        <span> ongoing </span>
                                    </h6>

                                    <br/>

                                    <p>
                                        This is my diploma project and it is a system for automated pet feeding. It will consist of intelligent
                                        dispensers that provide food and water. The dispensers will be wirelessly connected
                                        to a smartphone application. Within the app, a nutrition plan will be established,
                                        which will include meal times and portion sizes. The system will allow remote feeding
                                        due to the capacity of the water and food tanks, allowing the pet's owner to be away from
                                        home. If the water or food tanks are close to running out, the owner will be notified via the mobile app.

                                    </p>

                                    <br/>

                                    <p>
                                                Github link:&nbsp;
                                        <a>
                                            https://github.com/soniadeca28/SnackInator
                                        </a>
                                    </p>

                                </blockquote>
                            </div>
                        </div>


                    </div>

                </div>


            </div>
        );
    }
}

export default Projects;