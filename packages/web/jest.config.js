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
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    },
    setupFiles: ['<rootDir>/jest.setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
}
