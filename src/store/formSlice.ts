import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let secondInputInitialString = "";
for (let i = 1; i<= 100; i++) {
    secondInputInitialString = secondInputInitialString + (i + " ");
}
secondInputInitialString = secondInputInitialString.slice(0, -1);

function getRandomValue () {
    return (Math.floor(Math.random() * 98) + 2).toString();
}

const initialState = {
   firstInputValue: "",
   secondInputValue: secondInputInitialString,
   isVisibleSecondInput: false,
   thirdInputValue: "",
   fourthInputValue: "",
   isVisibleOutputAllFields: false,
   fifthInputValue:  "",
   isVisibleDataRecordingBlock: false,
   isVisibleDataReadingBlock: false
}


const formSlice = createSlice({
    name: "from",
    initialState,
    reducers: {
        setFirstInputValue(state, action:PayloadAction<string>) {
            state.firstInputValue = action.payload.replace(/[^0-9]/g,"");
            if (state.firstInputValue !== "") {
                state.isVisibleSecondInput = true;
            } else {
                state.isVisibleSecondInput = false;
            }
        },

        setThirdInputValue (state, action:PayloadAction<string>) {
            if (state.isVisibleSecondInput) {
                const newValue = action.payload.split(" ");
                state.thirdInputValue = newValue.map(item => +item * +state.firstInputValue).join(" ");
            }
        },

        updateThirdInputValue (state, action:PayloadAction<string>) {
            state.thirdInputValue = state.thirdInputValue + action.payload;
        },
        
        setFourthInputValue (state) {
            if (state.isVisibleSecondInput) {
                state.fourthInputValue = state.firstInputValue + state.secondInputValue + state.thirdInputValue;
                state.fourthInputValue = state.fourthInputValue.replace(/[^0-9]/g,"");
            }
        },

        setFifthInputValue (state, action:PayloadAction<string>) {
            state.fifthInputValue = action.payload;
        },

        resetInputValues (state) {
            state.firstInputValue = "";
            state.secondInputValue = secondInputInitialString;
            state.isVisibleSecondInput = false;
            state.thirdInputValue = "";
            state.fourthInputValue = "";
        },

        toggleVisibleOutputAllFields (state) {
            state.isVisibleOutputAllFields = !state.isVisibleOutputAllFields;
        },

        toggleVisibleDataRecordingBlock (state) {
            state.isVisibleDataRecordingBlock = !state.isVisibleDataRecordingBlock;
        },

        toggleVisibleDataReadingBlock (state) {
            state.isVisibleDataReadingBlock = !state.isVisibleDataReadingBlock;
        },

        setRandomValue (state) {
            state.isVisibleSecondInput = true;
            state.firstInputValue = getRandomValue();
            state.thirdInputValue = getRandomValue();
            state.secondInputValue = getRandomValue();
            state.fourthInputValue = getRandomValue();
        }
    }

});

export const { 
    setFirstInputValue,
    setThirdInputValue,
    setFourthInputValue,
    updateThirdInputValue,
    resetInputValues,
    toggleVisibleOutputAllFields,
    setRandomValue,
    setFifthInputValue,
    toggleVisibleDataRecordingBlock,
    toggleVisibleDataReadingBlock
} = formSlice.actions;

export default formSlice.reducer;
