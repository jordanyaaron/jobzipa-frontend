import React, { useState } from "react";

export default function Monetizations() {

  // 💰 Summary
  const [summary, setSummary] = useState({
    availableBalance: 120000,
    totalEarnings: 450000,
    totalWithdrawn: 300000,
    pending: 30000,
  });

  // 📋 Transactions
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "earning",
      amount: 50000,
      status: "completed",
      reference: "TXN123",
      date: "2026-03-20",
    },
    {
      id: 2,
      type: "withdrawal",
      amount: 30000,
      status: "pending",
      reference: "TXN124",
      date: "2026-03-22",
    },
  ]);

  // 💳 Payment Method
  const [paymentMethod, setPaymentMethod] = useState({
    provider: "M-Pesa",
    phone: "07XXXXXXXX",
  });

  // 💸 Withdraw
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleWithdraw = () => {
    const amount = Number(withdrawAmount);

    if (!paymentMethod) {
      alert("Add payment method first");
      return;
    }

    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (amount > summary.availableBalance) {
      alert("Insufficient balance");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const newTx = {
        id: Date.now(),
        type: "withdrawal",
        amount,
        status: "pending",
        reference: "TXN" + Math.floor(Math.random() * 10000),
        date: new Date().toISOString().slice(0, 10),
      };

      setTransactions(prev => [newTx, ...prev]);

      setSummary(prev => ({
        ...prev,
        availableBalance: prev.availableBalance - amount,
        pending: prev.pending + amount,
      }));

      setWithdrawAmount("");
      setLoading(false);
    }, 1000);
  };

  return (

    <div className="p-2 pb-[64px] mt-[64px] md:mt-0 md:p-4  w-[calc(100vw)] md:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
      <h1
        className="hidden md:block text-[24px] text-[var(--text)]"
      >Monitizations</h1>
      <div
         className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        {/* 🔹 Payment Method */}
        <div className="p-4 border border-[var(--border)] rounded-lg">
            <h2 className="font-bold mb-2">Payment Method</h2>
            <p>{paymentMethod.provider}</p>
            <p>{paymentMethod.phone}</p>
        </div>

        {/* 🔹 Summary */}
        <div className="  grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card title="Balance" value={summary.availableBalance} />
            <Card title="Total Earned" value={summary.totalEarnings} />
            <Card title="Withdrawn" value={summary.totalWithdrawn} />
            <Card title="Pending" value={summary.pending} />
        </div>
      </div>
      

      {/* 🔹 Withdraw */}
      <div className="p-4 border border-[var(--border)]  rounded-lg space-y-3">
        <h2 className="font-bold">Withdraw</h2>

        <input
          type="number"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-3 py-2 border border-[var(--border)]  rounded-lg"
        />

        <button
          onClick={handleWithdraw}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          Withdraw
        </button>
      </div>

      {/* 🔹 Transactions */}
      <div className="border border-[var(--border)]  rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Reference</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t border-[var(--border)] ">
                <td className="p-3 capitalize">{tx.type}</td>
                <td className="p-3">{tx.amount}</td>

                <td className="p-3">
                  <span
                    className={`
                      px-2 py-1 rounded-full text-xs
                      ${
                        tx.status === "completed"
                          ? "bg-green-100 text-green-600"
                          : tx.status === "pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }
                    `}
                  >
                    {tx.status}
                  </span>
                </td>

                <td className="p-3">{tx.reference}</td>
                <td className="p-3">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}


// 🔹 Card component
function Card({ title, value }) {
  return (
    <div className="p-4 border border-[var(--border)] rounded-xl">
      <p className="text-sm">{title}</p>
      <h2 className="text-xl font-bold">Tsh {value.toLocaleString()}</h2>
    </div>
  );
}