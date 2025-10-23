# 🚗 Car Dealership API

Una API REST completa construida con NestJS para gestionar un concesionario de automóviles. Esta aplicación permite realizar operaciones CRUD sobre automóviles y sus marcas, incluyendo un sistema de seed para poblar la base de datos con datos de prueba.

## 🚀 Características

- **Framework**: NestJS con TypeScript
- **Validación**: Class-validator y Class-transformer para validación de datos
- **Arquitectura**: Modular siguiendo las mejores prácticas de NestJS
- **UUID**: Identificadores únicos para automóviles y marcas
- **Pipes de validación**: Validación automática de UUIDs y DTOs
- **Sistema de Seed**: Poblado automático de datos de prueba
- **Gestión de marcas**: CRUD completo para marcas de automóviles

## 📋 Endpoints de la API

### Automóviles (`/cars`)

| Método | Endpoint    | Descripción                    | Body                        |
|--------|-------------|--------------------------------|-----------------------------|
| GET    | `/cars`     | Obtiene todos los automóviles  | -                          |
| GET    | `/cars/:id` | Obtiene un automóvil por ID    | -                          |
| POST   | `/cars`     | Crea un nuevo automóvil        | `{ brand: string, model: string }` |
| PATCH  | `/cars/:id` | Actualiza un automóvil         | `{ brand?: string, model?: string }` |
| DELETE | `/cars/:id` | Elimina un automóvil           | -                          |

### Marcas (`/brand`)

| Método | Endpoint     | Descripción                  | Body                    |
|--------|--------------|------------------------------|-------------------------|
| GET    | `/brand`     | Obtiene todas las marcas     | -                      |
| GET    | `/brand/:id` | Obtiene una marca por ID     | -                      |
| POST   | `/brand`     | Crea una nueva marca         | `{ name: string }`     |
| PATCH  | `/brand/:id` | Actualiza una marca          | `{ name?: string }`    |
| DELETE | `/brand/:id` | Elimina una marca            | -                      |

### Sistema de Seed (`/seed`)

| Método | Endpoint | Descripción                           | Body |
|--------|----------|---------------------------------------|------|
| GET    | `/seed`  | Puebla la BD con datos de prueba     | -    |

### Ejemplos de respuesta

#### Automóvil
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "brand": "Toyota",
  "model": "Corolla"
}
```

#### Marca
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "name": "Toyota",
  "createdAt": 1698163200000,
  "updatedAt": 1698163300000
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

4. **Puebla la base de datos (opcional)**
   ```bash
   # Visita http://localhost:3000/seed para cargar datos de prueba
   curl http://localhost:3000/seed
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
├── cars/                 # Módulo de automóviles
│   ├── cars.controller.ts    # Controlador REST para cars
│   ├── cars.service.ts       # Lógica de negocio de cars
│   ├── cars.module.ts        # Módulo de cars
│   ├── dto/                  # Data Transfer Objects
│   │   ├── create-car.dto.ts
│   │   └── update-car.dto.ts
│   └── interfaces/           # Interfaces TypeScript
│       └── car.interface.ts
├── brand/                # Módulo de marcas
│   ├── brand.controller.ts   # Controlador REST para brands
│   ├── brand.service.ts      # Lógica de negocio de brands
│   ├── brand.module.ts       # Módulo de brands
│   ├── dto/                  # Data Transfer Objects
│   │   ├── create-brand.dto.ts
│   │   └── update-brand.dto.ts
│   └── entities/             # Entidades TypeScript
│       └── brand.entity.ts
└── seed/                 # Sistema de datos de prueba
    ├── seed.controller.ts    # Controlador para seed
    ├── seed.service.ts       # Servicio para poblar datos
    ├── seed.module.ts        # Módulo de seed
    └── data/                 # Datos de semilla
        ├── brand.seed.ts     # Datos de marcas
        └── cars.seed.ts      # Datos de automóviles
```

## 🎯 Funcionalidades

### Validación de datos
- Validación automática de DTOs usando decoradores de `class-validator`
- Whitelist automática que filtra propiedades no permitidas
- Validación de UUID en parámetros de ruta
- Validación de longitud mínima en nombres de marcas

### Gestión de automóviles
- Crear automóviles con marca y modelo
- Listar todos los automóviles
- Buscar automóvil por ID
- Actualizar información de automóviles
- Eliminar automóviles

### Gestión de marcas
- Crear marcas con validación de nombre
- Listar todas las marcas disponibles
- Buscar marca por ID (UUID)
- Actualizar información de marcas
- Eliminar marcas
- Timestamps automáticos (createdAt, updatedAt)

### Sistema de Seed
- Poblado automático de la base de datos
- Datos de prueba predefinidos para marcas y automóviles
- Endpoint simple para inicializar datos (`GET /seed`)

## 🚀 Ejemplos de uso

### Inicializar datos de prueba
```bash
curl -X GET http://localhost:3000/seed
```

### Trabajar con marcas
```bash
# Crear una nueva marca
curl -X POST http://localhost:3000/brand \
  -H "Content-Type: application/json" \
  -d '{"name": "BMW"}'

# Obtener todas las marcas
curl -X GET http://localhost:3000/brand

# Obtener marca específica
curl -X GET http://localhost:3000/brand/{brand-id}

# Actualizar marca
curl -X PATCH http://localhost:3000/brand/{brand-id} \
  -H "Content-Type: application/json" \
  -d '{"name": "BMW Motors"}'

# Eliminar marca
curl -X DELETE http://localhost:3000/brand/{brand-id}
```

### Trabajar con automóviles
```bash
# Crear un nuevo automóvil
curl -X POST http://localhost:3000/cars \
  -H "Content-Type: application/json" \
  -d '{"brand": "BMW", "model": "X5"}'

# Obtener todos los automóviles
curl -X GET http://localhost:3000/cars

# Obtener automóvil específico
curl -X GET http://localhost:3000/cars/{car-id}

# Actualizar automóvil
curl -X PATCH http://localhost:3000/cars/{car-id} \
  -H "Content-Type: application/json" \
  -d '{"model": "X5 2024"}'

# Eliminar automóvil
curl -X DELETE http://localhost:3000/cars/{car-id}
```
---
