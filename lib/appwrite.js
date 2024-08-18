import { Client, Account, ID} from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.aldentedigitals.aldentepos',
    projectId: '66c12e5a0002734ccb97',
    databaseId: '66c1372e00145dfc0d1a',
    usersCollectionId: '66c13756001991e8d07a',
    menuItemsCollectionId: '66c13a0b001e1581035b',
    storageId:'66c147510017abdc11d3',
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const account = new Account(client);

export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}

