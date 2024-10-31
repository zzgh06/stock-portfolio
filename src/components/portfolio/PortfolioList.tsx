import { usePortfolios } from "@/hooks/usePortfolio";

export default function PortfolioList() {
  const { data: portfolios, isLoading } = usePortfolios();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {portfolios?.map((portfolio) => (
        <div key={portfolio.id}>
          <h3>{portfolio.name}</h3>
          <div>
            <p>
              {portfolio.stocks.length} stocks
            </p>
            <ul>
              {portfolio.stocks.map((stock) => (
                <li key={stock.id}>
                  {stock.symbol}: {stock.shares} shares @ ${stock.avgPrice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}