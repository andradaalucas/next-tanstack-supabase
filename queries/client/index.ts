import { createSupabaseBrowserClient } from "@/utils/supabase/supabase-browser"

export const getCountries = async () => {
    const supabase = await createSupabaseBrowserClient()
    const { data } = await supabase.from('countries').select('*').throwOnError()
    return data
}
