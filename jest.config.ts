module.exports = {
preset: 'ts-jest',
testEnvironment: 'jsdom',
setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each', '@testing-library/jest-dom/extend-expect'],
};