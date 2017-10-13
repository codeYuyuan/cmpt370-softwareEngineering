# A web application for breeders and buyer to look for pets.

### USask CMPT370 Software Engineering Group 15 project

To run this application on your local machine:  
Make sure you have node and mysql on your computer.  
#####On Mac:  
        brew insall mysql;  
        brew services start mysql;  
        brew install node  
#####On Linux:
        sudo apt-get install mysql-server;  
        sudo apt-get install nodejs;  
After installation, open terminal, run:  
        git clone https://github.com/codeYuyuan/cmpt370-softwareEngineering.git;  
        cd cmpt370-softwareEngineering  
        node config/createDatabases  
        node app  
In browser, go to  http://localhost:3000  

Note: You can modify the database setting in config/database.js