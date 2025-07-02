## Code Style and Standards

### General Guidelines
- Write clean, readable, and maintainable code
- Use meaningful variable and function names
- Add comments for complex logic
- Follow consistent indentation and formatting
- Prefer explicit over implicit code

### Architectual guidelines
- This code should be run as inexpensively as possible: serverless app and pay-per-use AWS dynamo db
- We're going to use typescript on the server and the client
- For our hex map logic, we're going to use the Honeycomb library from here: https://abbekeultjes.nl/honeycomb
- For our game map, we're going to use https://pixijs.com/
- we're going to use Vite to build
- we're going to use this monorepo with /client and /server and /shared root directories as the homes for those things
- users will log into the site with an OAuth flow with discord
- I want to use a single-table dynamodb design, using https://electrodb.dev/
- we're going to use a client-polling pattern for getting updates from the server
- we're going to use AWS SAM (Serverless Application Model) for cloud deployment of the lambdas, built front end, and the like

### Documentation
- Include JSDoc/docstrings for functions and classes
- Update README.md when adding new features
- Document any setup or configuration requirements
- Include examples in documentation where helpful

## Project Structure
- Keep related files organized in appropriate directories
- Use clear and descriptive file names
- Maintain consistent naming conventions across the project

## Testing
- Write unit tests for new functionality
- Ensure tests are comprehensive and cover edge cases
- Use descriptive test names that explain what is being tested
- Mock external dependencies appropriately

## Security
- Validate all user inputs
- Use environment variables for sensitive configuration
- Follow security best practices for the technology stack
- Never commit secrets or credentials to the repository

## Performance
- Consider performance implications of code suggestions
- Optimize for readability first, then performance
- Use appropriate data structures and algorithms
- Avoid premature optimization

## Dependencies
- Prefer well-maintained and popular libraries
- Keep dependencies up to date
- Minimize the number of dependencies when possible
- Document any specific version requirements

## Error Handling
- Implement proper error handling and logging
- Provide meaningful error messages to users
- Handle edge cases gracefully
- Use appropriate error types and status codes

## Git and Version Control
- Write clear and descriptive commit messages
- Keep commits focused and atomic
- Use feature branches for new development
- Follow conventional commit format when possible

## Additional Notes
- Consider accessibility in UI/UX suggestions
- Follow responsive design principles for web applications
- Prioritize user experience and intuitive interfaces
- Consider internationalization if applicable

---