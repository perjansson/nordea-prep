module.exports = {
    verbose: true,
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.js$': 'babel-jest',
    },
    globals: {
        NODE_ENV: 'test',
    },
    moduleFileExtensions: ['js', 'jsx', 'json'],
    setupFiles: ['<rootDir>/jest.setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
}
