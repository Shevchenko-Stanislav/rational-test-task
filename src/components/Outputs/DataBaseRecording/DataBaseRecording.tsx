import classes from "./DataBaseRecording.module.css";
import { useAppSelector } from "../../../hooks/reduxHooks";

const DataBaseRecording = () => {
    const { isVisibleDataRecordingBlock } = useAppSelector(state => state.form);

    return(
        <>
            {isVisibleDataRecordingBlock && 
                <div className={classes.wrapper}>
                    INSERT INTO table1
                        (field_1, field_2 ,field_3 ,field_4 ,field_5)
                    VALUES
                        (
                            firstInputValue,
                            secondInputValue,
                            thirdInputValue,
                            fourthInputValue,
                            fifthInputValue
                        )
                </div>
            }
        </>

    )
}

export { DataBaseRecording }