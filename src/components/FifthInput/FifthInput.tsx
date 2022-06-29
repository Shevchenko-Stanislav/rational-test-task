import classes from "./FifthInput.module.css";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setFifthInputValue } from "../../store/formSlice";


const FifthInput = () => {
    const firstInputValue = useAppSelector(state => state.form.firstInputValue);
    const fourthInputValue = useAppSelector(state => state.form.fourthInputValue);
    const dispatch = useAppDispatch();
    let fifthInputValue;

    if (firstInputValue !== "") {
            fifthInputValue = BigInt(fourthInputValue) % BigInt(+firstInputValue);
            fifthInputValue = fifthInputValue.toString()
            dispatch(setFifthInputValue(fifthInputValue));
        } else {
            fifthInputValue = "";
            dispatch(setFifthInputValue(fifthInputValue));
        }

        /* global BigInt */
    return(
        <div className={classes.wrap}>
            <div>Пятое поле</div>
            <textarea value={fifthInputValue} disabled={true} className={classes.textarea}/>
        </div>
    )
}

export { FifthInput }