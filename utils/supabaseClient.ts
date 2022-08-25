import { createClient } from "@supabase/supabase-js"
import { SupabaseError } from "./error"

const loadEnv = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
        throw SupabaseError.MissingEnvironmentVariables
    }

    return { supabaseUrl, supabaseAnonKey }
}

export const supabase = (() => {
    const { supabaseUrl, supabaseAnonKey } = loadEnv()
    return createClient(supabaseUrl, supabaseAnonKey)
})()
