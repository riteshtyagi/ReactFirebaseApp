export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make Async call then
        const firestore = getFirestore();
        const profile=getState().firebase.profile;
        const uid=getState().firebase.auth.uid;
        firestore.collection('project').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: "CREATE_PROJECT", project})
        }).catch((error)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',error})
        })
    }
};