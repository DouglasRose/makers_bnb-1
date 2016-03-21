#MakersBnB Reborn

#####A [Makers Academy](http://www.makersacademy.com') project (Week 9)

####Authors
- [Alain Lemaire](https://github.com/jaxdid)
- [Barry Grubb](https://github.com/barrygrubb)
- [Douglas Rose](https://github.com/DouglasRose)
- [Fareed Patel](https://github.com/fareedpatel)

##Description
An AirBnB clone that allows all users to view and filter a list of rental properties and sign up to access more features. Signed-in users can add and update their property listings, book other users' properties and manage incoming booking requests.

##Instructions
- Run `git clone https://github.com/DouglasRose/makers_bnb-1` to create a local copy of this project.
- Run `bundle install` to install backend dependencies.
- Generate or copy a standard Rails 4 `config/secrets.yml` file.
- Run `rake db:create` followed by `rake db:migrate` and `rake db:migrate RAILS_ENV=test` to set up development and test databases.
- Run `rails s` from the project root to launch the backend server (http://localhost:3000).
- Run `npm start` from `app/assets/javascripts/angular_frontend` to launch the frontend server (http://localhost:8000).

#####Testing
- Run `rspec` from the project root to run the backend test suite.
- Run `npm run protractor` from `app/assets/javascripts/angular_frontend` to run the end-to-end (e2e) test suite.

##Technologies
#####Frontend
- AngularJS

#####Backend
- Ruby on Rails 4
- Node.js + npm
- PostgreSQL

##Known Issues
- Spaces are not linked to a User model.
- Adding a new space has basic frontend validation, but no backend validation.
- Unused backend resources (e.g., scaffolded routes). 
- Incomplete test coverage.

##Implemented User Stories
```
As a signed-in user,
So that I can advertise my property,
I want to be able to create a new space.
```
```
As a signed-in user,
So that I can price my property,
I want to be able to add a price per night to my space.
```
```
As a signed-in user,
So that I can identify my property,
I want to be able to name my space.
```
```
As a signed-in user,
So that I can describe my property,
I want to be able to add a description to my space.
```

##Attribution
`logo.svg` made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.
