const SessionManager = {

    getLocation(){
        const location = sessionStorage.getItem('location');
        if (location) return location;
        else return null;
    },

    setLocation(location){
        // sessionStorage.setItem('firstName', firstName);
        sessionStorage.setItem('location', location);
      
       
    },

    removeLocation(){
        sessionStorage.removeItem('location');
        
    },




}

export default SessionManager;