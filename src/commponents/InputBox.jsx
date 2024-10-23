import React ,{useId} from "react";


function InputBox({
    label,
    ammonut,
    onAmmonutChange,
    onCurrencyChange,
    currencOptions = [],
    selectCurrency = "usd",
    ammountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
   
    const ammoutInputId = useId() //give the unique id but don't use it as key to iterate a list
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor= {ammoutInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={ammoutInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {ammountDisable}
                    value={ammonut}
                    onChange={(e)=>onAmmonutChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    {currencOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                       
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
