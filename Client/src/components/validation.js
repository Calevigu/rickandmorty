const validation=(userData)=>{
    let corrections={}

    if (!userData.email) {
        corrections.email="You need to put something"
    }else if(!/^\S+@\S+\.\S+/.test(userData.email)){
        corrections.email="Its have to be an email."
    }else if(userData.email.length>35){
        corrections.email="Its to large."
    }

    if(!/\d/.test(userData.password)){
        corrections.password="You need to put at least one number"
    }else if (userData.password.length<6 || userData.password.length>15){
        corrections.password="The length has to be between 6 and 15 letters "
    }

    return corrections;

}

export default validation;