export class RuntimeError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "RuntimeError"
    }
}

export class SupabaseError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "SupabaseError"
    }

    static MissingEnvironmentVariables = new SupabaseError("Missing environment variables")
}
