import React from 'react';


const Wapp = (props) =>{
    return(
        <>
        <div className="container text-light">
            <div className="cards pt-4">
                <h1>
                {props.city}
                </h1>
                <h5 className="py-2">
                    <i className="fas fa-street-view"></i>
                </h5>
                
                {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}&deg;</h1>):null}
                {/** show min and max temp */}

                {minmaxTemp(props.temp_min,props.temp_max)}

                <h4 className="py-3">{props.description}</h4>

                
            </div>
        </div>
          
        </>
    );
};

function minmaxTemp(min,max){
    if(min && max){
        return(
            <h3>
            <span className="px-0"> min {min}&deg;</span>
            <span className="px-4">max {max}&deg;</span>
            </h3>
        );
    }
    
}

export default Wapp;