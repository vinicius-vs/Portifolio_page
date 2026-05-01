# Backend Architecture (.NET)

## Overview

This backend is designed to support a full-stack portfolio platform with:

* REST API
* Contact system with persistence
* PDF generation (resume)
* Clean and scalable architecture

---

## 🧱 Architecture Style

Use a simplified version of **Clean Architecture**:

```txt
API (Controllers)
↓
Application (Services / Use Cases)
↓
Domain (Entities)
↓
Infrastructure (Database, External Services)
```

---

## 📁 Folder Structure

```txt
src/
 ├── Api/
 │    ├── Controllers/
 │    ├── DTOs/
 │    └── Program.cs
 │
 ├── Application/
 │    ├── Interfaces/
 │    ├── Services/
 │
 ├── Domain/
 │    ├── Entities/
 │
 ├── Infrastructure/
 │    ├── Data/
 │    ├── Repositories/
 │    └── Services/
```

---

## 📦 Responsibilities

### API Layer (Controllers)

* Handle HTTP requests
* Validate input
* Return responses

Example:

* ContactController
* ProjectsController

---

### Application Layer (Business Logic)

* Contains services and use cases
* No direct database access
* Uses interfaces

Example:

* ContactService
* ProjectService

---

### Domain Layer (Core)

* Pure business entities
* No dependencies

Example:

* Contact
* Project

---

### Infrastructure Layer

* Database (Entity Framework Core)
* External services (Email, PDF)
* Repository implementations

---

## 🧠 Entities (Domain)

Example:

```csharp
public class Contact
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Message { get; set; }
    public DateTime CreatedAt { get; set; }
}
```

---

## 🔌 DTOs (API Layer)

Used for input/output:

```csharp
public class CreateContactDto
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Message { get; set; }
}
```

---

## ⚙️ Services (Application Layer)

```csharp
public interface IContactService
{
    Task CreateAsync(CreateContactDto dto);
}
```

```csharp
public class ContactService : IContactService
{
    private readonly IContactRepository _repository;

    public ContactService(IContactRepository repository)
    {
        _repository = repository;
    }

    public async Task CreateAsync(CreateContactDto dto)
    {
        var contact = new Contact
        {
            Name = dto.Name,
            Email = dto.Email,
            Message = dto.Message,
            CreatedAt = DateTime.UtcNow
        };

        await _repository.AddAsync(contact);
    }
}
```

---

## 🗄️ Repository Pattern

### Interface:

```csharp
public interface IContactRepository
{
    Task AddAsync(Contact contact);
}
```

### Implementation:

```csharp
public class ContactRepository : IContactRepository
{
    private readonly AppDbContext _context;

    public ContactRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task AddAsync(Contact contact)
    {
        _context.Contacts.Add(contact);
        await _context.SaveChangesAsync();
    }
}
```

---

## 🧾 DbContext (Infrastructure)

```csharp
public class AppDbContext : DbContext
{
    public DbSet<Contact> Contacts { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }
}
```

---

## 🌐 Controllers

```csharp
[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IContactService _service;

    public ContactController(IContactService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateContactDto dto)
    {
        await _service.CreateAsync(dto);
        return Ok();
    }
}
```

---

## 🔌 Dependency Injection

In `Program.cs`:

```csharp
builder.Services.AddScoped<IContactService, ContactService>();
builder.Services.AddScoped<IContactRepository, ContactRepository>();
```

---

## 🗃️ Database

Recommended:

* PostgreSQL
* Entity Framework Core

---

## 📄 PDF Generation (Resume)

Create a service:

* IResumeService
* ResumeService

Responsibilities:

* Generate PDF dynamically
* Return file stream

Suggested library:

* QuestPDF

---

## 📧 Email Service

Create:

* IEmailService
* EmailService

Responsibilities:

* Send contact messages via email

---

## 🔗 API Endpoints

```txt
POST   /api/contact
GET    /api/projects
GET    /api/resume/pdf
```

---

## ⚠️ Best Practices

* Use async/await everywhere
* Keep controllers thin
* Do not put business logic in controllers
* Use DTOs (never expose entities directly)
* Validate input data

---

## 🚀 Future Improvements

* Logging (Serilog)
* Authentication (JWT)
* Docker support
* CI/CD pipeline
* Caching (Redis)

---

## 🎯 Final Goal

A backend that demonstrates:

* Clean architecture principles
* Real-world API design
* Database usage
* Separation of concerns

---

## 💬 Summary

This project should clearly show that you can:

* Build scalable APIs
* Structure backend systems properly
* Work with databases and services
* Follow professional engineering practices


