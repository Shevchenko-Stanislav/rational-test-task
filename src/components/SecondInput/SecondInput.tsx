import cn from "classnames/bind";
import classes from "./SecondInput.module.css";
import { useAppSelector } from "../../hooks/reduxHooks";

const SecondInput = () => {
    const firstInputValue = useAppSelector(state => state.form.firstInputValue);
    const secondInputValue = useAppSelector(state => state.form.secondInputValue);

    const cx = cn.bind(classes);
    const classNames = cx({
        input__wrap: true,
        visible: firstInputValue !== ""
    })

    return (
        <div className={classNames}>
            <div>Второе поле</div>
            <textarea className={classes.input} value={secondInputValue} onChange={() => {}}/>
        </div>
    )
}

export { SecondInput }