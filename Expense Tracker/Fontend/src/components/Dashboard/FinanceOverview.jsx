import CustomePieChart from "../Charts/CustomePieChart";

const COLORS = ["#875CF6", "#FA2C37", "#FF6900"];
const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  // console.log(totalBalance);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Financial Overview</h5>
          </div>
          <CustomePieChart data={balanceData} label="Total Balance"
              totalAmount={`${totalBalance}`}
              colors={COLORS}
              showTextAnchor={true}
          />
    </div>
  );
};

export default FinanceOverview;
