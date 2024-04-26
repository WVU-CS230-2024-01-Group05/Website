import {useAuthenticator,AccountSettings, Authenticator} from "@aws-amplify/ui-react"

   export const useFetchUserAttributes = async () => {
    const {currentUser} = useAuthenticator();

    const fetchUserAttributes=async ()=>{
        try {
            return currentUser.attributes;
        } catch (error) {
            console.error('Error fetching user attributes:', error);
            return null;
        }
    };
    return fetchUserAttributes;
};
    export default useFetchUserAttributes;