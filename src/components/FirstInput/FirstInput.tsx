import classes from "./FirstInput.module.css";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setFirstInputValue } from "../../store/formSlice";
import { useAppSelector } from "../../hooks/reduxHooks";

const FirstInput = () => {
    const dispatch = useAppDispatch();
    const firstInputValue = useAppSelector(state => state.form.firstInputValue)
    return (
        <div className={classes.wrap}>
            <div>Первое поле</div>
            <input
                type="text"
                className={classes.input}
                value={firstInputValue}
                onChange={(event) => {
                    dispatch(setFirstInputValue(event.target.value));
                }} 
            />
        </div>
    )
}

export { FirstInput }