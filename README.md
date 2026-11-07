# URL Param Inspector

Inspect a web address and its query parameters.

## Run

npm test and python -m http.server 8000 (visit http://localhost:8000)

## Example input (JSON)

{
  "url": "https://example.com/search?q=code&page=2"
}

## Expected output fields (JSON)

{
  "origin": "https://example.com",
  "path": "/search",
  "params": {
    "q": "code",
    "page": "2"
  },
  "secure": true
}

## Engineering

Standalone functional implementation, automated CI tests and no third-party runtime dependencies. Educational portfolio example: review for production readiness before deployment.

MIT License - https://github.com/santdevfull
