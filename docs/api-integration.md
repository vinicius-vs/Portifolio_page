# API Integration

## Backend

* .NET REST API

## Endpoints

* GET /projects
* POST /contact
* GET /resume/pdf

## Frontend Service Layer

Create a central file:

```
services/api.ts
```

## Example

```
export async function sendContact(data) {
  return fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
```

## Guidelines

* Do not call API directly in components
* Use services layer
* Handle loading states
* Handle errors properly

## Future Improvements

* Authentication
* Logging
* Analytics
