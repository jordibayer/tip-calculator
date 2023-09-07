import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleReset() {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  }
  return (
    <div style={{ display: "flex", gap: 5, flexDirection: "column" }}>
      <BillInput
        bill={bill}
        onBill={setBill}
      />
      <Opinion
        tip={myTip}
        onTip={setMyTip}>
        How did you like the service?
      </Opinion>
      <Opinion
        tip={friendTip}
        onTip={setFriendTip}>
        How did your friend like the service?
      </Opinion>
      <TotalPay
        bill={bill}
        myTip={myTip}
        friendTip={friendTip}
        onReset={handleReset}
      />
    </div>
  );
}
function BillInput({ bill, onBill }) {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Enter the bill"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}

function Opinion({ tip, onTip, children }) {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      <label>{children}</label>
      <select
        value={tip}
        onChange={(e) => onTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function TotalPay({ bill, myTip, friendTip, onReset }) {
  const tip = bill * ((myTip + friendTip) / 2 / 100);
  const totalBill = bill + tip;
  return (
    <div>
      {bill !== 0 ? (
        <div>
          <h3>
            You pay ${totalBill} (${bill} + ${tip} tip)
          </h3>
          <button onClick={onReset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
