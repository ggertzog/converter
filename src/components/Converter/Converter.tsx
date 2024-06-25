import "./Converter.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { updateEur, updateUsd } from "../../store/currencySlice";

export default function Converter () {

    const { usd, eur } = useSelector((state: RootState) => state.currency)

    const dispatch = useDispatch();

    const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if(!isNaN(value)) {
            dispatch(updateUsd(value))
        }
    }

    const handleEurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if(!isNaN(value)) {
            dispatch(updateEur(value))
        }
    }

    return (
        <div className="converter">
            <div className="converter__container">
                <div className="converter__box">
                    <label className="converter__label" htmlFor="usd">USD</label>
                    <input className="converter__input" value={usd} onChange={handleUsdChange} type="number" id="usd" />
                </div>
                <div className="converter__box">
                    <label className="converter__label" htmlFor="eur">EUR</label>
                    <input className="converter__input" value={eur} onChange={handleEurChange} type="number" id="eur" />
                </div>
            </div>
        </div>
    )
}
