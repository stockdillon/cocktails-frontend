import { QueryType } from "@shared/models/query-type.enum";

export interface QueryTypeConfig {
    type: QueryType,
    displayText: string,
    query: string,
}