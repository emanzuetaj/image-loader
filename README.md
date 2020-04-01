# image-loader
### Setup
You must have the following setup/installed on your local machine:
- [Git](https://git-scm.com/downloads)
- [Nodejs](nodejs.org) (includes NPM)
- [Angular CLI 9.1x](https://cli.angular.io/)
- [Local or remote MySQL instance to test](https://www.mysql.com/downloads/)
    - Per current code, a table called [BlobTest] is necessary with the following schema
        - Id [INT]
        - Name [VARCHAR]
        - Title [VARCHAR]
        - Description [VARCHAR]
        - Value [LONGBLOB]
        
### Running
1. ```pull``` from this repo
2. In the root of image-loader, install necessary node packages by going through [backend_rest.js](backend_rest.js) and running ```npm install``` for every ```require``` you see. (did not take the time to setup a package.json file)
3. Update the local DB connection info in [backend_rest.js](backend_rest.js) to the one you'll be connecting to
4. Test the API is working by running ```node backend_rest``` from the root of image-loader
5. Navigate to [image-loader/image-loader](image-loader/image-loader) and run ```npm install``` to download the node modules
6. In your local DB, make sure to have entries to be able to see in front end. If you do not have any, I've set up a backend API to upload so just POST to api/upload with the necessary params (check [backend_rest.js](backend_rest.js))
7. To test front end after you have data, run ```ng serve --open``` from the Angular project in [image-loader/image-loader](image-loader/image-loader) 
