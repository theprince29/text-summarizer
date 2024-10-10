# Text Summarizer


A simple Node.js application that uses Google Generative AI for text summarization. This project leverages Express.js for the server setup and Axios for making API calls. Environment variables are managed using dotenv.


## Features
- Summarizes text using Google's Generative AI
- Uses Axios for API requests
- Built with Express.js for routing
- Supports environment variables with dotenv


## Installation


1. Clone the repository:


   ```bash
   git clone https://github.com/theprince29/text-summarizer.git
   ```


2. Navigate into the project directory:


   ```bash
   cd text-summarizer
   ```


3. Install the dependencies:


   ```bash
   npm install
   ```


## Environment Variables


Make sure you have a `.env` file in the root directory to store your API keys and other sensitive information. Below is an example of what your `.env` file might look like:


```
API_KEY=your-google-generative-ai-api-key
```


## Usage


To start the application, run:


```bash
npm start
```


The server will start using Nodemon, and you can access the app in your browser at `http://localhost:3000`.


## Dependencies


- [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai): Google Generative AI package
- [Axios](https://www.npmjs.com/package/axios): HTTP client for making requests
- [Dotenv](https://www.npmjs.com/package/dotenv): Environment variable manager
- [Express](https://www.npmjs.com/package/express): Web framework for Node.js


## Author


**Prince Pal**


## License

This project is licensed under the ISC License.


