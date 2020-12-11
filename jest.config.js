module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^@/(.*)$": "<rootDir>/src/$1"
  }
  // collectCoverage: true,
  // coverageReporters: ['html']
};
