import css from "../СardList/CardList.module.css";
import { useState, useEffect } from "react";
import api from "../service/api";
import { FormCard } from "./formCard";
export const GetFact = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.getFact();
        setData(res);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return <FormCard data={data} />;
};
