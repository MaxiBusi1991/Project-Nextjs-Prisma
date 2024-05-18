//ESTO ES UN ARCHIVO DE COMUNICACION ENTRE LOS ROUTES Y LA BASE DE DATOS
import {PrismaClient} from '@prisma/client'

export const prisma = new PrismaClient();