import React from "react";
import { fetchPrismicData } from "../../utils/prismicHelpers";
import { RichText } from "prismic-reactjs";
import "./Home.scss";

function Home() {
  const [doc, setDocData] = React.useState(null);

  React.useEffect(() => {
    // TODO: Check if this React hook attribute passing is implemented correctly
    fetchPrismicData(setDocData, "homepage");
  }, []);

  return (
    <React.Fragment>
      {doc ? (
        <div className="home">
          <div className="home__top">
            <div className="home__image">
              <img
                src={doc.data.home_image.url}
                alt={doc.data.home_image.alt}
              />
            </div>
            <div className="home__title">
              <h1>{RichText.asText(doc.data.home_title)}</h1>
            </div>
          </div>
          <div className="home__content">
            <div className="home__gallery">
              <div className="gallery__item">
                <img
                  src={doc.data.slider_img_1.url}
                  alt={doc.data.slider_img_1.alt}
                />
                <p>
                  {RichText.asText(doc.data.slider_text_1)}
                </p>
              </div>
              <div className="gallery__item">
                <img
                  src={doc.data.slider_img_2.url}
                  alt={doc.data.slider_img_2.alt}
                />
                <p>
                  {RichText.asText(doc.data.slider_text_2)}
                </p>
              </div>
              <div className="gallery__item">
                <img
                  src={doc.data.slider_img_3.url}
                  alt={doc.data.slider_img_3.alt}
                />
                <p>
                  {RichText.asText(doc.data.slider_text_3)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>No content</h1>
      )}
    </React.Fragment>
  );
}

export default Home;
