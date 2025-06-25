beforeEach(() => {
  jest.clearAllMocks();
  jest.resetModules(); // optional if using jest.mock in many files
});

process.env.JWT_SECRET = 'test_secret';
process.env.NODE_ENV = 'test';

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection during test:', reason);
});

const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    args[0] &&
    typeof args[0] === 'string' &&
    args[0].includes('DeprecationWarning')
  ) {
    return;
  }
  originalWarn(...args);
};
