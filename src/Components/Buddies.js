import React from "react";


const Buddies = props => {
    console.log("buddies", props);
    return(
        <div className="buddie-list">
            {props.buddiesList.map((buddie, index) => {
                return(
                    <div className="buddie" key={index}>
                        <button className="edit">Edit Buddie</button>
                        <h2>{buddie.name}</h2>
                        <p>{buddie.email}</p>
                        <p>{buddie.role}</p>
                        </div>
                );
            })}
        </div>
    );
};

export default Buddies