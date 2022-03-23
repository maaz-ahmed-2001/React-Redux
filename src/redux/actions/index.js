
// This file contains all ready-to export actions to be performed in the form of functions
// In functions we only define the type of function e.g ADD directs to trigger the add function in reducer


export const add = () =>{
    return{
        type : "ADD"
    }    
}

export const dec = () =>{
    return{
        type : "DEC"
    }
}