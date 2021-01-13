import React from "react";
import { fetchPrismicData } from "../../utils/prismicHelpers";
import { RichText } from "prismic-reactjs";

function Story() {
  const [doc, setDocData] = React.useState(null);

  React.useEffect(() => {
    // TODO: Check if this React hook attribute passing is implemented correctly
    fetchPrismicData(setDocData, "story_page");
  }, []);

  return (
    <React.Fragment>
      { doc ? (
        <div className="story">
          <div className="story__left">
            <h1>
              { RichText.asText(doc.data.story_title) }
            </h1>
          </div>
          <div className="story__right">
            <img
              src={ doc.data.main_image.url }
              alt={ doc.data.main_image.alt }
            />
          </div>
          <div className="story__left">
            <p>
              { RichText.render(doc.data.main_content) }
            </p>
            <div className="left__gallery">
              <div className="gallery__item">
                <img
                  src={ doc.data.story_img_1.url }
                  alt={ doc.data.story_img_1.alt }
                />
                <p>
                  { RichText.render(doc.data.story_text_1) }
                </p>
              </div>
              <div className="gallery__item">
                <img
                  src={ doc.data.story_img_2.url }
                  alt={ doc.data.story_img_2.alt }
                />
                <p>
                  { RichText.render(doc.data.story_text_2) }
                </p>
              </div>
              <div className="gallery__item">
                <img
                  src={ doc.data.story_img_3.url }
                  alt={ doc.data.story_img_3.alt }
                />
                <p>
                  { RichText.render(doc.data.story_text_3) }
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

export default Story;
