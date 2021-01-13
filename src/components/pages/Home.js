import React from 'react';
import { fetchPrismicData } from '../../utils/prismicHelpers';
import { RichText } from 'prismic-reactjs'

function Home() {
  const [doc, setDocData] = React.useState(null);

  React.useEffect(() => {
    // TODO: Check if this React hook attribute passing is implemented correctly
    fetchPrismicData(setDocData, 'homepage');
  }, []);

  return (
    <div className="home">
      {
        doc ? (
          <div className="home__top">
            <div className="home__image">
              <img src={doc.data.home_image.url} alt={doc.data.home_image.alt} />
            </div>
            <div className="home__title">
              <h1>{RichText.asText(doc.data.home_title)}</h1>
            </div>
          </div>


        ) :
        <h1>
          No content
        </h1>
      }
    </div>
  );
}

export default Home;
