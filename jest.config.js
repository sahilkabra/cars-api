module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '(<rootDir>/src/.*|(\\.|/)(test))\\.ts$',
    testURL: 'http://localhost',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
