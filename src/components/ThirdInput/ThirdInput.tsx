import classes from "./ThirdInput.module.css";
import { useAppSelector } from "../../hooks/reduxHooks";
import { setThirdInputValue, updateThirdInputValue } from "../../store/formSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useEffect } from "react";

const ThirdInput = () => {
    const dispatch = useAppDispatch();
    const thirdInputValue = useAppSelector(state => state.form.thirdInputValue);
    const isVisibleSecondInput = useAppSelector(state => state.form.isVisibleSecondInput);
    const firstInputValue = useAppSelector(state => state.form.firstInputValue);
    const secondInputValue = useAppSelector(state => state.form.secondInputValue);

    useEffect(() => {
        dispatch(setThirdInputValue(secondInputValue))
    }, [firstInputValue]);// eslint-disable-line
    
    return(
        <div className={classes.wrap}>
            <div>Третье поле</div>
            <textarea className={classes.textarea} 
                value={isVisibleSecondInput ? thirdInputValue : ""} 
                disabled={!isVisibleSecondInput}
                onKeyDown={(e) => {
                    if (/\s/.test(e.key) || /\d/.test(e.key)) {
                        dispatch(updateThirdInputValue(e.key))
                    }
                }}
            />
            
        </div>
    )
}

export { ThirdInput }