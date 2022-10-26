# Ethereum-based-E-Voting-WebApp
A decentralized electronic voting system using blockchain which helps users to cast their votes using the web portal in an efficient and secure manner. 
This DApp aims to revolutionize how voting works, by leveraging the power of Blockchain. The blockchain technology is an emerging solution to these concerns. 
This evolving technology is immutable i.e. after a vote is casted, it cannot be undone. It is decentralized and distributed which means that there’s no central authority over the voting system. Due to aforementioned factors, it brings transparency in elections.

## DApp Workflow
- The voter must first login to the dapp using their mobile number via OTP confirmation & then their Aadhaar Number.
- After authentication, the voter can now begin the process of voting.
- If the voter is valid then the voting pallete will be opened with candidate names.
- Now, the voter can cast their vote by clicking on the vote button next to their preferred candidate.
- A voter can cast their vote only once. After which, the voter’s automatically logged out after giving a notification.
- Same process continues for many more voters irrespective of their voting wards.
- Vote count for each candidate is displayed on the portal, next to the candidate, when the voter logs in again after casting a vote.

## Technology Stack:
1. React.js
2. Truffle
3. Ganache
4. Metamask
5. Web3.js
6. Solidity
7. Node.js
8. Express.js

## Methodology

1. We have to download Truffle Framework and install it with the below command: `npm install -g truffle`
2. Download and install <a href= "https://trufflesuite.com/ganache"> Ganache </a>.
3. Add a new workspace on Ganache under a test name. Import the 'truffle-config' file under the "Add Project" section.
4. Save the settings and launch the workspace.
5. Now, add the Metamask extension to your Google Chrome. Then create an account in Metamask.  
6. Choose private key by clicking on key option and create private network in meta mask by providing url `http://127.0.0.1:7545`.
7. Import private key to connect to localhost account.
8. After pasting private key, click on import and metamask will be connected to localhost test account to perform transactions.
9. Inside the project directory (Voting App), run the command: `npm install`
10. Go inside the 'ui' directory and then again run the command: `npm install`
11. Go back to the main project directory and then run the command: `truffle migrate`
12. Create an account on <a href= "https://www.twilio.com"> Twilio </a> and log into the account using your credentials. The voter has to first verify their number here, by adding their valid mobile number.
13. You need to add a `.env` file and add the following fields & their data in the given way: <br>
 `ACCOUNT_SID= XXXXX` <br>
 `AUH_TOKEN= XXXXX` <br>
 `SMS_SECRET_KEY= XXXXX` <br>
 `TWILIO_PHONE_NUMBER= XXXXX` (the number from which you are going to receive the OTP message)<br>
 `JWT_AUTH_TOKEN= XXXXX` <br>
 `JWT_REFRESH_TOKEN= XXXXX` 
14. Go inside the `ui` directory, and start the web application by running the command: `npm start`
15. Go back to the main project directory and then run the command: `node server.js`
16. After opening the React application in your browser it will trigger Metamask to interact with your blockchain network. Then by logging into your account, your metamask will be connected to blockchain.
17. Now you can test your application accordingly. Use only the numbers registered on Twilio to receive the OTP.
