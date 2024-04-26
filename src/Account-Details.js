import {useAuthenticator,AccountSettings, Authenticator} from "@aws-amplify/ui-react"

   export const useFetchUserAttributes = async () => {
        try {
            const {currentUser} = useAuthenticator();
            return currentUser.attributes;
        } catch (error) {
            console.error('Error fetching user attributes:', error);
            return null;
        }
    };

export default useFetchUserAttributes;