import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { setFourthInputValue } from "../../store/formSlice";
import cn from "classnames/bind";
import classes from "./FourthInput.module.css";

const FourthInput = () => {
    const dispatch = useAppDispatch();
    const form = useAppSelector(state => state.form);
    
    useEffect(() => {
        dispatch(setFourthInputValue())
    }, [form.firstInputValue, form.thirdInputValue]);// eslint-disable-line

    const lastDigit = form.fourthInputValue.slice(-1);
    const isEven = +lastDigit % 2 === 0;

    const cx = cn.bind(classes);
    const classNames = cx({
        red_border: !isEven,
        blue_border: isEven,
        fourth_input: true,
        gray_border: (form.firstInputValue === "")
    })

    return(
        <div className={classes.wrap}>
            <div>Четвертое поле</div>
            <textarea className={classNames} value={form.isVisibleSecondInput ? form.fourthInputValue : ""} onChange={() => {}}/>
        </div>
    )
}

export { FourthInput }