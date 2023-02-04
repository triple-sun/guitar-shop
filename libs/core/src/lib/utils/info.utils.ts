import { Prefix } from "../enums/prefix.enum"
import { Property } from "../enums/property.enum"
import { Entity } from "../enums/utils.enum"
import { ApiExamples } from "./api.util"

export const getAppRunningMessage = (port: string | number) => `🚀 Guitar shop API is running on http://localhost:${port}/${Prefix.Global}. Swagger specification and interface: http://localhost:${port}/${Prefix.Spec}`

export const getRemovedMessage = (ent: Entity, id?: number) => `${ent} ${id ? `with id ${id}` : ''} was successfully removed`

export const getRemovedSchema = (ent: Entity) => ({schema: { example: getRemovedMessage(ent, ApiExamples.Comm[Property.Id]), type: 'string', description: getRemovedMessage(ent) }})
