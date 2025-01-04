import type { Portfolio } from "~/types";

export const useGetPortfolio = () => {
  const getPortfolio = async () => {
    const { data } = await useAsyncData(() =>
      queryContent<Portfolio>("/portfolio").findOne(),
    );

    return data.value;
  };

  return {
    getPortfolio,
  };
};
