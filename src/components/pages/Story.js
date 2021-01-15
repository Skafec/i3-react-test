import React from "react";
import { fetchPrismicData } from "../../utils/prismicHelpers";
import { RichText } from "prismic-reactjs";
import "./Story.scss";

function Story() {
  const [doc, setDocData] = React.useState(null);
  const [show, doShow] = React.useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false
  });
  const firstElementRef = React.useRef(null),
        secondElementRef = React.useRef(null),
        thirdElementRef = React.useRef(null);

  React.useLayoutEffect( () => {
    console.log(firstElementRef);
  } )

  /* TODO: Problem with this code is that first we get null because fetching doc data is async function,
  we have to wait for the view to render in order to trigger DOM references */
  React.useLayoutEffect(() => {
    const topPosition = element => element.getBoundingClientRect().top;

    const firstElementPosition = topPosition(firstElementRef.current),
          secondElementPosition = topPosition(secondElementRef.current),
          thirdElementPosition = topPosition(thirdElementRef.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (firstElementPosition < scrollPosition) {
        doShow(state => ({...state, itemOne: true}));
      } else if (secondElementPosition < scrollPosition) {
        doShow(state => ({...state, itemTwo: true}));
      } else if (thirdElementPosition < scrollPosition) {
        doShow(state => ({...state, itemThree: true}));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    // TODO: Check if this React hook attribute passing is implemented correctly
    fetchPrismicData(setDocData, "story_page");
  }, []);

  return (
    <React.Fragment>
      { doc ? (
        <div className="story">
          <div className="story__left">
            <div className="story__title">
              <h1>
                { RichText.asText(doc.data.story_title) }
              </h1>
            </div>
          </div>
          <div className="story__right">
            <div className="story__img">
              <img
                src={ doc.data.main_image.url }
                alt={ doc.data.main_image.alt }
              />
            </div>
          </div>
          <div className="story__left">
            <div className="story__text">
              { RichText.render(doc.data.main_content) }
            </div>
            <div className="left__gallery">
              <div
                animate={show.itemOne} ref={firstElementRef}
                className="gallery__item"
              >
                <div className="gallery__img">
                  <img
                    src={ doc.data.story_img_1.url }
                    alt={ doc.data.story_img_1.alt }
                  />
                </div>
                <div className="gallery__text">
                  { RichText.render(doc.data.story_text_1) }
                </div>
              </div>
              <div
                animate={show.itemTwo} ref={secondElementRef}
                className="gallery__item">
                <div className="gallery__img">
                  <img
                    src={ doc.data.story_img_2.url }
                    alt={ doc.data.story_img_2.alt }
                  />
                </div>
                <div className="gallery__text">
                  { RichText.render(doc.data.story_text_2) }
                </div>
              </div>
              <div
                animate={show.itemThree} ref={thirdElementRef}
                className="gallery__item">
                <div className="gallery__img">
                  <img
                    src={ doc.data.story_img_3.url }
                    alt={ doc.data.story_img_3.alt }
                  />
                </div>
                <div className="gallery__text">
                  { RichText.render(doc.data.story_text_3) }
                </div>
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
