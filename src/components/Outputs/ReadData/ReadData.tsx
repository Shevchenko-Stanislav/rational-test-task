import classes from "./ReadData.module.css";
import { useAppSelector } from "../../../hooks/reduxHooks";

const ReadData = () => {
    const isVisibleDataReadingBlock = useAppSelector(state => state.form.isVisibleDataReadingBlock);
    return(
        <>
        {isVisibleDataReadingBlock && 
            <div className={classes.wrapper}>
                SELECT col_1, col_2, col_3, col_4, col_5, id FROM table1 ORDER BY ID DESC LIMIT 1
            </div>
        }
        </>
    )
}

export { ReadData }