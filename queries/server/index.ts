import { createClient } from "@/utils/supabase/server"

export const getCountries = async () => {
	const supabase = await createClient()
	const { data } = await supabase.from('countries').select('*').throwOnError()
    return data
}
