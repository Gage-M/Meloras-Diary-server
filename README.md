# Meloras diary
## a  NPC charter  management system for Dungeons & Dragons 5e


this is the api client for the Dungeons and Dragons NPC chararter management system called Meloras diary 

    feel free to check out the React clint side my fallowing this link 
    https://github.com/Gage-M/Meloras-Diary-Client

## this application uses

   ### bcryptjs: 2.4.3
   ### cors: 2.8.5
   ### dotenv: 8.2.0
   ### express: 4.17.1
   ### helmet: 3.23.3
   ### knex: 0.21.2
   ### morgan: 1.10.0
   ### pg: 8.3.0
   ### winston: 3.3.3
   ### xss: 1.0.8

  ## as the main **dependencies** & ...

    ### chai: 4.2.0
    ### mocha: 8.0.1
    ### nodemon: 2.0.4
    ### postgrator-cli: 3.2.0
    ### supertest: 4.0.2

    as the Dev-dependencies 


    `npm i` to install all needed packages 

    if your using node 14+ you might want to make sure the pg is ^ 8.0

    if you node is 12 you might want to make sure the pg is ~7.0

    this is found to cause the most problems when starting up.

    the application is built for Postgrsql and if you would like to simulate a database locally 

    1: use `mv example.env .env` to make an env file and make needed changes  

    2: make database call 'meloras-diary', using you own user name 

    3: in bash of the root of this programme run `npm run migration` 

    4: make sure that you have the correct tables in 'meloras-diary'

    5: run seed file by using `psql -U [YOUR_USER_NAME] -d meloras-diary -f ./seeds/seed.meloras_diary_tables.sql`

    6: run `npm test` to make sure things are working, if so then should be good to go.  : ) 

feel free to p.m. if you have any questions 

    -gage



