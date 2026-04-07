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
  const [openModal, setOpenModal] = useState(false);
  const [tab, setTab] = useState("mobile");
  
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
    <>
        {openModal && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-[var(--header-bg)] text-[var(--text)] w-[calc(100vw-80px)] md:w-full max-w-md rounded-xl p-4 space-y-4">
                
                <h2 className="font-bold text-lg">Add Payment Method</h2>

                {/* Tabs */}
                <div className="flex border-b border-[var(--border)]">
                    <button
                    onClick={() => setTab("mobile")}
                    className={`flex-1 py-2 ${
                        tab === "mobile" ? "border-b-2 border-blue-600 font-bold" : ""
                    }`}
                    >
                        Mobile
                    </button>

                    <button
                    onClick={() => setTab("bank")}
                    className={`flex-1 py-2 ${
                        tab === "bank" ? "border-b-2 border-blue-600 font-bold" : ""
                    }`}
                    >
                    Bank
                    </button>
                </div>

                {/* CONTENT */}
                {tab === "mobile" ? (
                    <MobileForm />
                ) : (
                    <BankForm />
                )}

                {/* Close */}
                <button
                    onClick={() => setOpenModal(false)}
                    className="w-full py-2 bg-gray-400 rounded-lg"
                >
                    Cancel
                </button>
                </div>
            </div>
        )}
        <div className="p-2 pb-[64px] mt-[64px] md:mt-0 md:p-4  w-[calc(100vw)] md:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
            <h1
            className="hidden md:block text-[24px] text-[var(--text)]"
            >Monitizations</h1>
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-2"
            >

                {/* 🔹 Summary */}
                <div className="  grid grid-cols-2  gap-2">
                <Card title="Balance" value={summary.availableBalance} />
                <Card title="Total Earned" value={summary.totalEarnings} />
                <Card title="Withdrawn" value={summary.totalWithdrawn} />
                <Card title="Pending" value={summary.pending} />
            </div>

                
            <div className="grid grid-cols-1  gap-2">
                {/* 🔹 Payment Method */}
                <div className="p-4 border border-[var(--border)] rounded-lg space-y-3">
                    <h2 className="font-bold">Payment Method</h2>

                    {!paymentMethod ? (
                        <>
                        <p className="text-sm text-gray-500">
                            No payment method yet
                        </p>

                        <button
                            onClick={() => setOpenModal(true)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                        >
                            Add Payment Method
                        </button>
                        </>
                    ) : (
                        <>
                        <p>{paymentMethod.type}</p>
                        <p>{paymentMethod.provider || paymentMethod.bankName}</p>
                        <p>{paymentMethod.phone || paymentMethod.accountNumber}</p>

                        <button
                            onClick={() => setOpenModal(true)}
                            className="text-sm text-blue-600"
                        >
                            Edit
                        </button>
                        </>
                    )}
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
            </div>
            </div>
            

            

            {/* 🔹 Transactions */}
            <div className="border border-[var(--border)]  rounded-lg overflow-x-auto">
            <table className="min-w-full text-sm text-[var(--text)]">
                <thead className="bg-[var(--hover)] text-left">
                    <tr>
                    <th className="p-3">Type</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Reference</th>
                    <th className="p-3">Date</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.length === 0 ? (
                        <tr>
                        <td
                            colSpan="5"
                            className="p-6 text-center text-sm text-gray-500"
                        >
                            No transactions Yet
                        </td>
                        </tr>
                    ) : (
                        transactions.map((tx) => (
                        <tr key={tx.id} className="border-t border-[var(--border)]">
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
                        ))
                    )}
                </tbody>
            </table>
            </div>

        </div>    
    </>


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

// MobileForm
function MobileForm({ setPaymentMethod, setOpenModal }) {
    const [provider, setProvider] = useState("M-Pesa");
    const [phone, setPhone] = useState("");
  
    const handleSave = () => {
      if (!phone) return alert("Enter phone number");
  
      setPaymentMethod({
        type: "mobile",
        provider,
        phone,
      });
  
      setOpenModal(false);
    };
  
    return (
      <div className="space-y-3">
        
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className="w-full px-3 py-2 border  border-[var(--border)] rounded-lg"
        >
          <option value="M-Pesa">Vodacom (M-Pesa)</option>
          <option value="Airtel Money">Airtel</option>
          <option value="Tigo Pesa">Tigo (Yas)</option>
          <option value="Halopesa">Halotel</option>
        </select>
  
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border border-[var(--border)] rounded-lg"
        />
  
        <button
          onClick={handleSave}
          className="w-full py-2 bg-green-600 text-white rounded-lg"
        >
          Save
        </button>
      </div>
    );
  }
  
// BackForm
function BankForm({ setPaymentMethod, setOpenModal }) {
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountName, setAccountName] = useState("");
  
    const handleSave = () => {
      if (!bankName || !accountNumber || !accountName) {
        return alert("Fill all fields");
      }
  
      setPaymentMethod({
        type: "bank",
        bankName,
        accountNumber,
        accountName,
      });
  
      setOpenModal(false);
    };
  
    return (
      <div className="space-y-3">
  
        <input
          type="text"
          placeholder="Bank Name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          className="w-full px-3 py-2 border border-[var(--border)] rounded-lg"
        />
  
        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="w-full px-3 py-2 border border-[var(--border)] rounded-lg"
        />
  
        <input
          type="text"
          placeholder="Account Name"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          className="w-full px-3 py-2 border border-[var(--border)] rounded-lg"
        />
  
        <button
          onClick={handleSave}
          className="w-full py-2 bg-green-600 text-white rounded-lg"
        >
          Save
        </button>
      </div>
    );
  }