import classes from "./Buttons.module.css";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { 
    resetInputValues, 
    toggleVisibleOutputAllFields, 
    setRandomValue,
    toggleVisibleDataRecordingBlock,
    toggleVisibleDataReadingBlock
} from "../../store/formSlice";

const Buttons = () => {
    const dispatch = useAppDispatch();
    return (
        <div className={classes.buttons}>
            <button onClick={() => {dispatch(resetInputValues())}}>
                сброс
            </button>

            <button onClick={() => {dispatch(toggleVisibleOutputAllFields())}}>
                показать значение полей 
            </button>

            <button onClick={() => {dispatch(toggleVisibleDataRecordingBlock())}}>
                записать в таблицу 
            </button>

            <button onClick={() => {dispatch(toggleVisibleDataReadingBlock())}}>
                заполнить поля формы 
            </button>
            
            <button onClick={() => {dispatch(setRandomValue())}}>
                произвольные значение 
            </button>
        </div>

    )
}

export { Buttons }