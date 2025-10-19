# 🚗 Car Dealership API

Una API REST construida con NestJS para gestionar un concesionario de automóviles. Esta aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre automóviles.

## 🚀 Características

- **Framework**: NestJS con TypeScript
- **Validación**: Class-validator y Class-transformer para validación de datos
- **Arquitectura**: Modular siguiendo las mejores prácticas de NestJS
- **UUID**: Identificadores únicos para cada automóvil
- **Pipes de validación**: Validación automática de UUIDs y DTOs

## 📋 Endpoints de la API

### Automóviles (`/cars`)

| Método | Endpoint    | Descripción                    | Body                        |
|--------|-------------|--------------------------------|-----------------------------|
| GET    | `/cars`     | Obtiene todos los automóviles  | -                          |
| GET    | `/cars/:id` | Obtiene un automóvil por ID    | -                          |
| POST   | `/cars`     | Crea un nuevo automóvil        | `{ brand: string, model: string }` |
| PATCH  | `/cars/:id` | Actualiza un automóvil         | `{ brand?: string, model?: string }` |
| DELETE | `/cars/:id` | Elimina un automóvil           | -                          |

### Ejemplo de respuesta

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "brand": "Toyota",
  "model": "Corolla"
}
```

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone <repository-url>
   cd car-dealership
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia la aplicación**
   ```bash
   # Modo desarrollo
   npm run start:dev
   
   # Modo producción
   npm run start:prod
   ```

La aplicación estará disponible en `http://localhost:3000`

## 📝 Scripts disponibles

```bash
# Desarrollo
npm run start:dev      # Inicia en modo desarrollo con hot-reload
npm run start:debug    # Inicia en modo debug

# Construcción
npm run build          # Construye la aplicación
npm run start          # Inicia la aplicación

# Testing
npm run test           # Ejecuta las pruebas unitarias
npm run test:watch     # Ejecuta las pruebas en modo watch
npm run test:cov       # Ejecuta las pruebas con cobertura
npm run test:e2e       # Ejecuta las pruebas end-to-end

# Calidad de código
npm run lint           # Ejecuta ESLint
npm run format         # Formatea el código con Prettier
```

## 🏗️ Estructura del proyecto

```
src/
├── app.module.ts          # Módulo principal de la aplicación
├── main.ts               # Punto de entrada de la aplicación
└── cars/                 # Módulo de automóviles
    ├── cars.controller.ts    # Controlador con endpoints REST
    ├── cars.service.ts       # Lógica de negocio
    ├── cars.module.ts        # Módulo de automóviles
    ├── dto/                  # Data Transfer Objects
    │   ├── create-car.dto.ts
    │   └── update-car.dto.ts
    └── interfaces/           # Interfaces TypeScript
        └── car.interface.ts
```

## 🔧 Tecnologías utilizadas

- **[NestJS](https://nestjs.com/)** - Framework de Node.js para aplicaciones server-side
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript
- **[Class Validator](https://github.com/typestack/class-validator)** - Validación basada en decoradores
- **[Class Transformer](https://github.com/typestack/class-transformer)** - Transformación de objetos
- **[UUID](https://github.com/uuidjs/uuid)** - Generación de identificadores únicos
- **[Jest](https://jestjs.io/)** - Framework de testing
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formateador de código

## 🎯 Funcionalidades

### Validación de datos
- Validación automática de DTOs usando decoradores de `class-validator`
- Whitelist automática que filtra propiedades no permitidas
- Validación de UUID en parámetros de ruta

### Gestión de automóviles
- Crear automóviles con marca y modelo
- Listar todos los automóviles
- Buscar automóvil por ID
- Actualizar información de automóviles
- Eliminar automóviles

## 🧪 Testing

El proyecto incluye configuración para diferentes tipos de testing:

- **Pruebas unitarias**: Jest para testing de servicios y controladores
- **Pruebas E2E**: Supertest para testing de endpoints
- **Cobertura**: Generación de reportes de cobertura de código

## 👨‍💻 Desarrollo

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios
4. Ejecuta las pruebas (`npm run test`)
5. Verifica el linting (`npm run lint`)
6. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
7. Push a la rama (`git push origin feature/nueva-funcionalidad`)
8. Crea un Pull Request

---

Desarrollado con ❤️ usando NestJS
