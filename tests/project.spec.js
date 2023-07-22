const { test, expect } = require('@playwright/test');
//CHange to localhost on which it is running on
const nextjstest = 'http://localhost:3001/'; 
const nextjstestssr = 'http://localhost:3001/posts/ssg-ssr'
const nextjsrender = 'http://localhost:3001/posts/pre-rendering'

// Test checks if a yourname is present
test('Check Yourname Presence on Home', async () => {
  const name = 'Shi';
  expect(name).toBeDefined();
});


