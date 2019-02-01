const initState = {};

const authReducer = (state=initState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log(action.err);
            return {...state,
            authError:"login failed"};
        case "LOGIN_SUCCESS":
            console.log("LOGIN SUCCESS");
            return {...state, authError:null};
        case "SIGNOUT_SUCCESS":
            console.log("SUCCESSFULLY LOGGED OUT THIS BITCH");
            return{...state,authError:null};
        case "SIGN_UP_SUCCESS":
            return{
                ...state,
                authError:null
            };
        case "SIGN_UP_ERROR":
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
};

export default authReducer;