import type { Roles } from "../types";

export const roles: Record<Roles, Uppercase<Roles>> = {
    admin: 'ADMIN',
    postomat: 'POSTOMAT',
    user: 'USER'
}