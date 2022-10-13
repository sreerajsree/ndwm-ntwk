import Layout from "../components/constants/Layout";

const Brands = ({articles}) => {
    
  return <Layout articles={articles}></Layout>;
};

export const getServerSideProps = async (pageContext) => {
    const apiResponse = await fetch(
      `https://newsapi.org/v2/everything?q=fashion&pageSize=20`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        },
      }
    );
  
    const apiJson = await apiResponse.json();
    const { articles } = apiJson;
  
    return {
      props: {
          articles: articles
      }
    }
  };

export default Brands;
