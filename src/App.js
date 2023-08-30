import { useState } from "react";
import { getBalance, transfer } from "./MetaMaskService";

function App() {
    const [addressFrom, setAddressFrom] = useState(
        "0x6ad1bb9de62b004aecdab504f5c6ec18f494d08d"
    );
    const [addressTo, setAddressTo] = useState(
        "0xaf83f96944ceda6052AB0B9F78adFEb7661A6Ed7"
    );
    const [quantity, setQuantity] = useState("0");
    const [message, setMessage] = useState("");

    function getBalanceClick() {
        getBalance(addressFrom).then((balance) => setMessage(balance));
    }

    function transferClick() {
        transfer(addressFrom, addressTo, quantity)
            .then((tx) => setMessage(tx))
            .catch((err) => setMessage(err.message));
    }

    return (
        <div>
            Wallet:{" "}
            <input
                type="text"
                value={addressFrom}
                onChange={(event) => setAddressFrom(event.target.value)}
            />
            <button onClick={getBalanceClick}>getBalance</button>
            <br />
            To:{" "}
            <input
                type="text"
                value={addressTo}
                onChange={(event) => setAddressTo(event.target.value)}
            />
            <br />
            Quantity:{" "}
            <input
                type="text"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
            />
            <button onClick={transferClick}>transfer</button>
            <br />
            {message}
        </div>
    );
}

export default App;
