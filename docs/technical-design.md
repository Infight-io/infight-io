## Code Style and Standards

### General Guidelines
- Write clean, readable, and maintainable code
- Use meaningful variable and function names
- Add comments for complex logic
- Follow consistent indentation and formatting
- Prefer explicit over implicit code

### Architectural Guidelines

#### Core Principles
- This code should be run as inexpensively as possible: serverless app and pay-per-use AWS DynamoDB
- Monorepo structure with `/client` and `/server` root directories

#### Technology Stack
- **Language**: TypeScript on both server and client
- **Build Tool**: Vite
- **Testing**: Vitest for both client and server
- **Deployment**: AWS SAM (Serverless Application Model) for cloud deployment
- **Server Framework**: Fastify for Lambda-optimized API endpoints

#### Frontend Technologies
- **UI Framework**: Vue 3 with Vue Router
- **Component Library**: Headless UI for accessible, unstyled components
- **Styling**: Tailwind CSS for utility-first styling
- **Game Map Rendering**: PixiJS (https://pixijs.com/)
- **Hex Map Logic**: Honeycomb library (https://abbekeultjes.nl/honeycomb)

#### Backend & Data
- **Database**: Single-table DynamoDB design using ElectroDB (https://electrodb.dev/)
- **Real-time Updates**: Client-polling pattern for server updates

#### Authentication & Integration
- **User Authentication**: Discord OAuth flow

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