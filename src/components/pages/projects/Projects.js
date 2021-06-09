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
                                            Irrigation System - Arduino Project
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
                                        The mobile app also lets you choose a plant profile ( for example, cactus/orchid/carnivorous plant ) and modifies the
                                        watering plan according to the plant type. <br/>

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