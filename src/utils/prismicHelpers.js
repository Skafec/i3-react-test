import { Client } from "../prismic-configuration";
import Prismic from "@prismicio/client";

export const fetchPrismicData = (setDocData, setLoading, pageName) => {
  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.at("document.type", pageName)
    );
    if (response) {
      setDocData(response.results[0]);
      setLoading(false);
    }
  };
  fetchData();
};
