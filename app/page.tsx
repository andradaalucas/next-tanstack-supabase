import { CountriesList } from '@/components/CountriesList'
import { getCountries } from '@/queries/server'

export default async function Page() {
	const data = await getCountries()

	return (
		<>
			<CountriesList initialCountries={data || []} />
		</>
	)
}
