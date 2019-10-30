Loan App

Project structure:

API: -Controller

Endpoints : Defining endpoint at each controller level.
Data models Response : Response to front end formatted as data model response objects.
Dependency Injection : Used DI design pattern for creating the instance of DAL and BAL layer and inject into class constructer.
Elmah Logging : Will write all log info to file. Handles Application level error handling.
MS Unit Testing : for Unit testing the controller api.
BAL
Query layer : Used query for building query for multiple tables formats data and sends the response to Controller.
Data Objects: Transforms Database Objects into Data objects.
-DAL:

Entityframe work : Used Entityframe work code first approach for connecting to database for retrieval and updating databse
Database Objects: Tables of the database represented in class for querying.
UI:

src
Components

Customer Loan component: Main component for displaying all loans
Top up info component : Displays the info of selected loans. Option for Applying new loans.
Loan details component : Show more details of selected component below.
Services

Baseservice : Generic service for talking to API end point and returns observable.
Customer Loan Service : This service has get method for getting all loans.
Ngrx - Store

Action
Effects
Reducer & Selectors
Common

Appsetting : For storing Constants and Enpoints.
UI Models : Models used in the Applicaiton
Style

App Style : Built custom CSS to make application responsive
Unit Test

Component Test
Service Test : Implemented test case for Customer Loan Service
Whats could I implement?

LoanApp.DAL -

Create a generic DAL layer using repository pattern.
Create repository pattern
API :

Would implement Antiforgery token
Enable CORS to specific website
Angular :

I would write test case for all the scenarios and see the code coverage
Capturing the errors globally.
ngrxstore for Error Message. I would create a error component and load it on App component and map it to Error store. So, if any error occurs, this control will automatically displays the message to user.
Implement Authentication using JWT token
Would configure CSP as Self. So that data from no other website can be loaded
We could implement login and authentication process to secure the app.
Run Application : Angular : (*Note:Please configure the end point in environment.ts file. Default endpoint is https://localhost:44325/api/ )

Npm install
Npm start .Net Core
Launch in debug mode or Host in IIS Database Deployment: Run below commands on LoanApp.WebAPI to deploy db changes to “LoanDB” or I have attached db file in LoanApp.WebAPI/App_Data
Add-Migration InitialCreate
Update-Database
dotnet ef migrations script (for generating script)
