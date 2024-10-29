import React, { useEffect, useRef, useState } from 'react';
import Button from './Button.tsx';

export interface RangePriceInputProps {
  onSubmit: (value1: number, value2: number) => void; // Submit callback prop
}

const RangePriceInput: React.FC<RangePriceInputProps> = ({ onSubmit }) => {
  const slider1Ref = useRef<HTMLInputElement | null>(null);
  const slider2Ref = useRef<HTMLInputElement | null>(null);
  const sliderTrack = useRef<HTMLDivElement | null>(null);
  const displayRef = useRef<HTMLSpanElement | null>(null);
  const maxValue = 1000;
  const minGap = 5;

  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(maxValue);

  const fillColor = (value1: number, value2: number) => {
    const percent1 = (value1 / maxValue) * 100;
    const percent2 = (value2 / maxValue) * 100;
    if (sliderTrack.current) {
      sliderTrack.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #937DC2 ${percent1}%, #937DC2 ${percent2}%, #dadae5 ${percent2}%)`;
    }
  };

  const slideOne = () => {
    if (slider1Ref.current && slider2Ref.current) {
      let val1 = parseInt(slider1Ref.current.value);
      const val2 = parseInt(slider2Ref.current.value);

      if (val2 - val1 <= minGap) {
        val1 = val2 - minGap;
        slider1Ref.current.value = val1.toString();
      }

      setValue1(val1);
      fillColor(val1, val2);
      updateDisplay(val1, val2);
    }
  };

  const slideTwo = () => {
    if (slider1Ref.current && slider2Ref.current) {
      const val1 = parseInt(slider1Ref.current.value);
      let val2 = parseInt(slider2Ref.current.value);

      if (val2 - val1 <= minGap) {
        val2 = val1 + minGap;
        slider2Ref.current.value = val2.toString();
      }

      setValue2(val2);
      fillColor(val1, val2);
      updateDisplay(val1, val2);
    }
  };

  const updateDisplay = (val1: number, val2: number) => {
    if (displayRef.current) {
      displayRef.current.innerHTML = `${val1} - ${val2}`;
    }
  };

  const handleSubmit = () => {
    onSubmit(value1, value2); // Call the onSubmit callback with selected values
  };

  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      const val1 = parseInt(slider1Ref.current.value);
      const val2 = parseInt(slider2Ref.current.value);

      setValue1(val1);
      setValue2(val2);
      fillColor(val1, val2);
      updateDisplay(val1, val2);
    }
  }, []);

  return (
    <div className="w-full flex-col flex">
      <div className="relative max-w-full mx-2 h-[200px]">
        <div className="bg-purple w-1/3 relative m-auto py-3 rounded-md text-white font-semibold text-center">
          <span ref={displayRef}>{`0 - ${maxValue}`}</span>
        </div>
        <div
          ref={sliderTrack}
          className="w-full h-[5px] bg-[#d5d5d5] absolute m-auto top-0 bottom-0 rounded-md"
        >
          <input
            type="range"
            min="0"
            max={maxValue}
            defaultValue="0"
            ref={slider1Ref}
            onInput={slideOne}
          />
          <input
            type="range"
            min="0"
            max={maxValue}
            defaultValue={maxValue.toString()}
            ref={slider2Ref}
            onInput={slideTwo}
          />
        </div>
      </div>
      <Button onClick={handleSubmit} type={'button'} className={'w-[75%] text-white m-auto'}>
        Submit
      </Button>
    </div>
  );
};

export default RangePriceInput;
