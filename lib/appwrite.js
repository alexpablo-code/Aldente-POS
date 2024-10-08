import { Client, Account, ID, Avatars, Databases, Query} from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.aldentedigitals.aldentepos',
    projectId: '66c12e5a0002734ccb97',
    databaseId: '66c1372e00145dfc0d1a',
    usersCollectionId: '66c13756001991e8d07a',
    menuItemsCollectionId: '66c13a0b001e1581035b',
    menuCategoriesCollectionId: '66c51dbd002a91372ac9',
    storageId:'66c147510017abdc11d3',
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    usersCollectionId,
    menuItemsCollectionId,
    menuCategoriesCollectionId,
    storageId
} = config;

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, restaurantName) => {
    // Register User
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            restaurantName,
        )
        if(!newAccount) throw Error;

        const logoUrl = avatars.getInitials(restaurantName)

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.usersCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                restaurantName,
                logoUrl
            }
        )

        return newUser;

    } catch(error){
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try{
        const session = await account.createEmailPasswordSession(email, password)
        console.log('session created')
        return session;
    }catch(error){
        throw new Error(error);
    }
}

export const getCurrentUser = async () =>{
    try{
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.usersCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;
        
        return currentUser.documents[0];

    }catch(error){
        console.log("Error in get current user",error)
    }
}

export const getAllMenuItems = async () => {
    try{
        const menuItems = await databases.listDocuments(
            databaseId,
            menuItemsCollectionId,
        )
        return menuItems.documents;
    }catch(error){
        throw new Error(error);
    }
}

export const getAllMenuCategories = async () => {
    try{
        const menuCategories = await databases.listDocuments(
            databaseId,
            menuCategoriesCollectionId,
        )
        return menuCategories.documents;
    }catch(error){
        throw new Error(error);
    }
}

export const searchItem = async (query) => {
    try{
        const menuItem = await databases.listDocuments(
            databaseId,
            menuItemsCollectionId,
            [Query.search('itemName', query)]
        )
        return menuItem.documents;
    }catch(error){
        throw new Error(error);
    }
}

export const getRestaurantMenuCategories = async (userId) => {
    try{
        const menuCategories = await databases.listDocuments(
            databaseId,
            menuCategoriesCollectionId,
            [Query.equal('users', userId)]
        )
        return menuCategories.documents;
    }catch(error){
        throw new Error(error);
    }
}

export const signOut = async () => {
    try{
        const session = await account.deleteSession('current');
        return session
    }catch(error){
        throw new Error(error)
    }
}
