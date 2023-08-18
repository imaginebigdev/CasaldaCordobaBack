#!/bin/bash

# Script para actualizar las dependencias del proyecto

# Borra el directorio node_modules y el archivo package-lock.json
rm -rf node_modules package-lock.json

# Actualiza las dependencias a las últimas versiones
npm update

# Instala las dependencias actualizadas
npm install
