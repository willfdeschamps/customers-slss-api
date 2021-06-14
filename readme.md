




<p align="center">
  

  <h3 align="center">High Scalable Costumers API</h3>

  <p align="center">
    Simple but high scalable API to managa costumers
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#improvements">Improvements</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Simple but high scalable API to managa costumers

### Built With

* [Serverless Framework](https://www.serverless.com/)
* [Node.js](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [DynamoDB](https://aws.amazon.com/dynamodb/)
* [ElasticSearch](https://www.elastic.co/elasticsearch/)
* [Middy](https://github.com/middyjs/middy)
* [Jest](https://jestjs.io/)
* [Swagger](https://swagger.io/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

To only prerequisite is that you have Node.js and NPM installed in your machine, you got both if you install Node.js from the official website bellow, following the instructions for you OS.
* [Node.js](https://nodejs.org/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/willfdeschamps/customers-slss-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. To run locally, you must install a DynamoDB server also
   ```sh
   sls dynamodb install
   ```
   or
   ```sh
   npx sls dynamodb install
   ```
3. To deploy the api on AWS Cloud, you must have a user with admin privileges and configure your aws user credentials on your machine.
 
3.1 Create AWS user with admin privileges - 
[Link](https://docs.aws.amazon.com/mediapackage/latest/ug/setting-up-create-iam-user.html)

3.2 Configure your credentials on your machine
3.2.1 Install AWS CLI - [link](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
3.2.2 Configure Credentials
```sh
   aws configure
 ```


<!-- USAGE EXAMPLES -->
## Usage

As the main purpose of this project is to deploy a costumers api, you can deploy it on AWS Cloud or locally.

### Locally

#### Running the command below the serverless framework will use its offline feature to deploy the api in your localhost, so you can test it without spending money.
#### Remember that installing the DynamoDB server is required
```sh
   npm run start
   ```

### On AWS Cloud

#### Running the command below the serverless framework will deploy all the infrastructure necessary for the api to run on
<span style="color:red">
Very important: not all resources from this api architecture are free, so if you deploy it to AWS it will cost you some money
</span>

```sh
   npm run deploy
   ```

### Api documentation
#### You can find the API documentation in doc-swagger.yml file.
#### Only the search endpoint is not documented but it's a regular ElasticSearch and can be used to search any constumers information

<!-- IMPROVEMENTS -->
## Improvements

* A domain for the API
* Permissions individually per Lambda function
* Security, authorization and authentication, possibly using AWS Cognito
* Cors
* Application architecture
  * Decoupled layers
    * Repository
    * Service

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

William Deschamps - [@linkedin_handle](https://www.linkedin.com/in/william-deschamps-518148146/) - williamfdeschamps@gmail.com

[Project link](https://github.com/willfdeschamps/customers-slss-api)




