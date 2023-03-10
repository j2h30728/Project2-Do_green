import React, { PropsWithChildren } from 'react';
interface IModalDefaultType {
  onClose: () => void;
  children: React.ReactNode;
  removeBg?: boolean;
}

function Modal({ onClose, children, removeBg }: PropsWithChildren<IModalDefaultType>) {
  const className = {
    container: 'flex items-center fixed z-10 w-full h-screen',
    dialog:
      'flex fixed left-[50%] top-[50%] z-[10000] w-max h-max border-none bg-transparent translate-y-[-50%] translate-x-[-50%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]',
    background: `fixed top-0 left-0 z-[9998] w-[100%] ${
      removeBg ? 'h-[100%]' : 'h-screen'
    } bg-black bg-opacity-25 dark:bg-white/60 rounded-lx`,
  };
  return (
    <div className={className.container}>
      <dialog className={className.dialog}>
        {/* children === 모달로 띄울 컴포넌트 */}
        {children}
      </dialog>
      <div
        className={className.background}
        onClick={(e: React.MouseEvent) => {
          //배경을 누르면 모달창이 꺼짐(모달창을 제어하는 버튼이 있는 페이지에서 state값을 조절함)
          e.preventDefault();
          if (onClose) {
            onClose();
          }
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default Modal;
