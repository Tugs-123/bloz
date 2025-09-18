export interface Post {
  _id: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  slug: string;
  publisher: {
    title: string;
    picture: string;
  };
}
