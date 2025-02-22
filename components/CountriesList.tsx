'use client'

import { getCountries } from '@/queries/client'
import { useQuery } from '@tanstack/react-query'

type Country = {
	id: number
	name: string
}

export function CountriesList({ initialCountries }: { initialCountries: Country[] }) {
	const { data: countries } = useQuery({
		queryKey: ['countries'],
		queryFn: async () => {
			return getCountries()
		},
		initialData: initialCountries,
	})
	return (
		<div>
			{countries?.map((country) => (
				<div key={country.id}>
					<h2>{country.name}</h2>
				</div>
			))}
		</div>
	)
}
