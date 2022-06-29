import classes from "./OutputAllFields.module.css";
import { useAppSelector } from "../../../hooks/reduxHooks";

const OutputAllFields = () => {
    const state = useAppSelector(state => state.form);
    return (
        <>
            {
                state.isVisibleOutputAllFields &&
                <div className={classes.wrapper}>
                    <div>
                        <div>Первое поле</div>
                        <textarea value={state.firstInputValue} className={classes.textarea}/>

                    </div>
                    <div>
                        <div>Второе поле</div>
                        <textarea value={state.secondInputValue} className={classes.textarea}/>

                    </div>
                    <div>
                        <div>Третье поле</div>
                        <textarea value={state.thirdInputValue} className={classes.textarea}/>
                    </div>
                    <div>
                        <div>Четвертое поле</div>
                        <textarea value={state.fourthInputValue} className={classes.textarea}/>
                    </div>
                    <div>
                        <div>Пятое поле</div>
                        <textarea value={state.fifthInputValue} className={classes.textarea}/>
                    </div>
                </div>
            }
        </>
    )
}

export { OutputAllFields }