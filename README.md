# Next + Tanstack + Supabase

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), integrated with Supabase and Tanstack to display a list of countries.

## What It Does

This project fetches and displays a list of countries from a Supabase database using Next.js App Router and TanStack Query. It uses server components for initial data loading and client components for dynamic updates. The original functionality to create new countries has been removed, focusing only on the retrieval and rendering of the list, the idea is to make a boilerplate for anyone to use as initial configuration.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/andradaalucas/next-tanstack-supabase.git
   cd next-tanstack-supabase

   ```

2. **Install dependencies**:
   `npm install  `

3. **Set up Supabase**:
   1. Create a Supabase project at supabase.com.
   2. Create a countries table with at least id (integer) and name (text) columns.
   3. Add some sample data (e.g., { id: 1, name: "Argentina" }).
   4. Copy your Supabase URL and Anon Key into a .env.local file

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

# Benefits

A brief list of advantages when combining TanStack Query with Server Components in Next.js:

- **SSR + Dynamic Updates**: Fast initial render from the server, with client-side updates via TanStack Query (e.g., `initialData` in `PostsList`).
- **Efficient Caching**: Hydrates cache with server data, avoiding redundant fetches (e.g., `initialPosts`).
- **Real-Time Made Easy**: Supports real-time updates with Supabase Realtime and query invalidation (e.g., `invalidateQueries(['countries'])`).
- **Enhanced State**: Adds `isLoading`, `isError`, and `data` for better UX, even with server fetch.
- **Lower Initial Latency**: Server fetch reduces load time vs. client-only (e.g., `getCountriesServer`).
- **Resource Control**: Manages refetch timing with `staleTime` or `cacheTime` (e.g., 5 minutes).
- **Scalable**: Easily extends to mutations or more queries without restructuring.

## Comparison

- **Server-Only**: Simple, SEO-friendly, no dynamic updates.
- **Client-Only TanStack**: Interactive, but slower initial load and weaker SEO.
- **Hybrid (Server + TanStack)**: Combines SSR speed with client dynamism.

## Conclusion

This hybrid approach offers fast loads, SEO, and dynamic updates, ideal for balanced performance and interactivity.
