const Voting = artifacts.require("Voting.sol");

module.exports = function (deployer) {
  deployer.deploy(Voting, ["Candidate A", "Candidate B", "Candidate C", "Candidate D"]);
};
