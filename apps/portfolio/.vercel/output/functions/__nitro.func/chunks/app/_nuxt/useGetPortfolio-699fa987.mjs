import { u as useAsyncData, q as queryContent } from './query-6fc7ecdb.mjs';

const useGetPortfolio = () => {
  const getPortfolio = async () => {
    const { data } = await useAsyncData(
      "portfolio",
      () => queryContent("/portfolio").findOne()
    );
    return data.value;
  };
  return {
    getPortfolio
  };
};

export { useGetPortfolio as u };
//# sourceMappingURL=useGetPortfolio-699fa987.mjs.map
