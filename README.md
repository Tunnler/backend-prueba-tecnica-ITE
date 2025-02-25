# Backend para Prueba Técnica

Este proyecto es un backend desarrollado con Node.js y Express, siguiendo la arquitectura hexagonal y los principios SOLID. El backend se conecta a una base de datos PostgreSQL y proporciona endpoints para gestionar usuarios y posts.

## Características

- **Arquitectura Hexagonal**: Separación clara entre las capas de la aplicación.
- **Principios SOLID**: Código mantenible y escalable.
- **Base de Datos**: PostgreSQL para almacenar usuarios y posts.
- **Pruebas Unitarias**: Con Jest y Supertest.

## Requisitos

- Node.js (v14 o superior)
- PostgreSQL

## Instalación

1. **Clonar el Repositorio**:
    ```bash
    git clone https://github.com/Tunnler/backend-prueba-tecnica-ITE.git
    cd backend-prueba-tecnica-ITE
    ```

2. **Instalar Dependencias**:
    ```bash
    npm install
    ```

3. **Configurar la Base de Datos**:
    - Crea una base de datos en PostgreSQL:
      ```sql
      CREATE DATABASE prueba_tecnica;
      ```
    - Ejecuta el archivo `schema.sql` para crear las tablas


4. **Configurar Variables de Entorno**:
    - Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
      ```
      DB_HOST=localhost
      DB_USER=postgres
      DB_PASSWORD=yourpassword
      DB_NAME=prueba_tecnica
      ```

## Ejecutar el Servidor

```bash
npm start
