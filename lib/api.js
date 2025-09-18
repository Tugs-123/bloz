    import client from "lib/sanity"

    export const getAllPosts = async () => {
    const posts = await client.fetch(`*[_type == "post"]{_id,date,title,subtitle,'image': cover_image.asset->url, 'slug': slug.current,
        'publisher': publisher->{title,'picture': picture.asset->url}}`);
    return posts  ?? [] ;
    }
