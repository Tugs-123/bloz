import { createClient } from '@sanity/client';


const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2023-01-01",
    useCdn: process.NODE_ENV === 'production',
}
);

export default client;