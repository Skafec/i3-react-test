import React from "react";
import { fetchPrismicData } from "../../utils/prismicHelpers";
import { RichText } from "prismic-reactjs";
import "./Story.scss";
import CustomLoader from "../CustomLoader";

function Story() {
  const [doc, setDocData] = React.useState(null);
  const [show, doShow] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const elementRef = React.useRef(null);

  const setUpAnimations = () => {
    const topPosition = (element) => element.getBoundingClientRect().top;

    const elementPosition = topPosition(elementRef.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (elementPosition < scrollPosition - 200) doShow(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  };

  React.useEffect(() => {
    const fetchDataAndSetUpAnimation = new Promise((resolve) => {
      fetchPrismicData(setDocData, setLoading, "story_page");
      if (doc != null) {
        resolve(true);
      }
    });

    fetchDataAndSetUpAnimation.then(() => setUpAnimations());
  }, [doc]);

  return (
    <React.Fragment>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="story">
          <div className="story__left">
            <div className="story__title">
              <h1>{RichText.asText(doc.data.story_title)}</h1>
            </div>
          </div>
          <div className="story__right">
            <div className="story__img">
              <img
                src={doc.data.main_image.url}
                alt={doc.data.main_image.alt}
              />
            </div>
          </div>
          <div className="story__left">
            <div className="story__text">
              {RichText.render(doc.data.main_content)}
            </div>
            <div
              className={`left__gallery ${show ? "animate" : ""}`}
              ref={elementRef}
            >
              <div className="gallery__item">
                <div className="gallery__img">
                  <img
                    src={doc.data.story_img_1.url}
                    alt={doc.data.story_img_1.alt}
                  />
                </div>
                <div className="gallery__text">
                  {RichText.render(doc.data.story_text_1)}
                </div>
              </div>
              <div className="gallery__item">
                <div className="gallery__img">
                  <img
                    src={doc.data.story_img_2.url}
                    alt={doc.data.story_img_2.alt}
                  />
                </div>
                <div className="gallery__text">
                  {RichText.render(doc.data.story_text_2)}
                </div>
              </div>
              <div className="gallery__item">
                <div className="gallery__img">
                  <img
                    src={doc.data.story_img_3.url}
                    alt={doc.data.story_img_3.alt}
                  />
                </div>
                <div className="gallery__text">
                  {RichText.render(doc.data.story_text_3)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Story;
