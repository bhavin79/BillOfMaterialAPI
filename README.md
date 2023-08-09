# BillOfMaterialAPI

## TL;DR
This is a RESTful API developed using ExpressJS, Mongoose, and MongoDB. JWT is implemented for authorization and securying API endpoints. "bcrypt" is used for genrating hash for passwords. 
"Express-rate-limit" is used to limit the access to API per user per window of time. To overcome usual security vulnerability "helmet" middleware is used. 

## Long verison
A Bill of Materials (BOM) is a structured list that outlines all the components, materials, parts, and sub-assemblies needed to manufacture a product or build a project. It's a comprehensive document that provides detailed information about the quantities, descriptions, part numbers, and sometimes costs of each item required for the final product.

This API is for very specific segment of machine fabrication by using laser cutiting machines in India.


## Future goals
- [ ] Ability to create new formulas for generaing final cost.

## API documentation
- incoming documentation

## How to use it?
1. clone this git repo
2. Install nodeJS if you havent yet.
3. Run following command "Npm i" at the root directory for the project.
4. set up .env file which includes  3 variables
   - MONGO_URI = your_mongodb_atlas_url
   - JWT_SECRET = your_secret_string
   - JWT_LIFETIME = time for jwt token to expire
