import React from 'react';

interface IFormInput {
  type?: string;
  id: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  name: string;
  onChange?: (...event: any[]) => void;
  value: string;
}

export const FormInput = ({ type, placeholder, id, error, disabled, name, onChange, value }: IFormInput) => {
  const className = {
    input: `w-full px-3 py-2 bg-white dark:bg-[#292524] rounded-lg border border-gray-300 dark:border-[#4f4846] text-gray-900 dark:text-white placeholder:text-[12px] placeholder-gray-400 dark:placeholder-[#8c807d] focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3 ${
      error && 'border-red-500 dark:border-red-500'
    }`,
    disabled: 'w-full px-3 py-2 bg-gardenBG',
    disabledContainer: 'mt-1 min-h-[30px]',
  };
  if (disabled)
    return (
      <>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={className.disabled}
          disabled
          name={name}
          onChange={onChange}
          value={value}
        />
        <div className={className.disabledContainer}></div>
      </>
    );
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={className.input}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

interface IInputError {
  children: React.ReactNode;
}

export const IputError = ({ children }: IInputError) => {
  return <p className="mt-1 min-h-[30px] text-base text-red-500 dark:text-red-500">{children}</p>;
};

interface IInputSubmitButton {
  value: string;
}

export const InputButton = ({ value }: IInputSubmitButton) => {
  return (
    <div className="flex justify-center mt-3">
      <input
        type="submit"
        value={value}
        className="flex justify-center w-[60%] mb-2 py-2 border-garden4 border-[2px] rounded-full dark:border-[#8ff296] bg-garden1 text-xl text-garden2 dark:text-gray-700 font-semibold hover:bg-[#6f8f76] dark:hover:bg-[#6edb76] hover:drop-shadow-lg hover:scale-[0.98] transition ease-in-oout delay-75"
      ></input>
    </div>
  );
};

interface IClickButton {
  onClick?: () => void;
  children: React.ReactNode;
}
export const ClickButton = ({ onClick, children }: IClickButton) => {
  return (
    <div className="flex justify-center w-full px-3 mt-3">
      <button
        onClick={onClick}
        className="flex justify-center items-center w-[60%] mb-2 mt-3 py-2 rounded-full border-garden4 dark:border-red-400 border-[2px] bg-red-500 text-xl text-white dark:text-white font-semiboldshadow hover:bg-[#f54c4c] hover:drop-shadow-lg hover:scale-[0.98] transition ease-in-oout delay-75"
      >
        {children}
      </button>
    </div>
  );
};
