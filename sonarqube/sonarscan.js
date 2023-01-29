// eslint-disable-next-line import/no-extraneous-dependencies
const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "ce119d6fda59c6d618dd8b69e7a1c6ed56d3e113", // Should'nt be commited
    options: {
      "sonar.projectName": "react-redux-template",
      "sonar.projectDescription": "Ready to go react-redux-template",
      "sonar.projectKey": "react-redux-template",
      "sonar.projectVersion": "0.0.1",
      "sonar.exclusions": "",
      "sonar.sourceEncoding": "UTF-8",
    },
  },
  () => process.exit(),
);
