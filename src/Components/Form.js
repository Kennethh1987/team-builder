import React, { useState } from "react";

const Form = props => {
    const [buddie, setBuddie] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = event => {
        setBuddie ({...buddie, [event.target.name]: event.target.value});

    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewBuddie(buddie);
        setBuddie({ name:"", email: "", role: "",});

    };

    return (
        <form onSubmit={submitForm}>
            <label htmlfor="name">Name</label>
            <input 
            name="name"
            id="name"
            type="text"
            placeholder="name"
            onChange={changeHandler}
            value={buddie.name}
            />
            <label htmlfor="email">Email</label>
            <input
                name="email"
                id="email"
                type="text"
                placeholder="email"
                onChange={changeHandler}
                value={buddie.email}
                />
                <label htmlfor="role">Role</label>
                <input 
                name="role"
                id="role"
                type="text"
                placeholder="role"
                onChange={changeHandler}
                value={buddie.role}
                />
                <button type="submit">Add Buddie</button>
                 </form>
    );

};

export default Form