export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": ["ts-jest", {
            tsconfig: "./tsconfig.test.json"
        }]
    }
}
