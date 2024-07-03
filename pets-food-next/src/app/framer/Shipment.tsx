import { motion } from 'framer-motion';
import _ from 'lodash';
import { useId, useState } from 'react';
import { FaCat } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa6';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
// import VisuallyHidden from './VisuallyHidden';

export const Shipment = ({ total = 10 }) => {
  const [numOfProcessedWidgets, setNumOfProcessedWidgets] =
    useState(0);

  const numOfUnprocessedWidgets = total - numOfProcessedWidgets;

  const id = useId(); // todo: later

  function handleProcessWidget() {
    if (numOfProcessedWidgets < total) {
      setNumOfProcessedWidgets(numOfProcessedWidgets + 1);
    }
  }

  function handleRevertWidget() {
    if (numOfProcessedWidgets > 0) {
      setNumOfProcessedWidgets(numOfProcessedWidgets - 1);
    }
  }

  return (
    <section className='mt-[90px] flex h-dvh flex-col items-center justify-start bg-slate-900 p-4'>
      <div className='flex flex-col items-center gap-4'>
        <div className='flex aspect-[12_/_9] w-dvw max-w-[192px] flex-wrap items-start justify-center gap-1 border-4 border-green-500 p-1'>
          {_.range(numOfUnprocessedWidgets).map((itemNum, i) => {
            // const firstId = `${id}-${i}-${itemNum}`;
            return (
              <motion.div
                layoutId={`${i + 1}`}
                key={itemNum}
                className='flex h-[32px] w-[32px] items-center justify-center rounded bg-indigo-400 font-semibold text-lg text-white'
              >
                <FaDog title={`${i + 1}`} />
              </motion.div>
            );
          })}
        </div>
        <div className='flex justify-between gap-16'>
          <button
            type='button'
            className='flex h-8 w-8 items-center justify-center rounded bg-transparent text-white hover:bg-slate-700'
            onClick={handleProcessWidget}
          >
            {/* <VisuallyHidden>Process widget</VisuallyHidden> */}
            <FiChevronDown />
          </button>
          <button
            type='button'
            className='flex h-8 w-8 items-center justify-center rounded bg-transparent text-white hover:bg-slate-700'
            onClick={handleRevertWidget}
          >
            <FiChevronUp />
            {/* <VisuallyHidden>Revert widget</VisuallyHidden> */}
          </button>
        </div>
        <div className='flex aspect-[12_/_9] w-dvw max-w-[192px] flex-wrap items-start justify-center gap-1 border-4 border-green-500 p-1'>
          {_.range(numOfProcessedWidgets).map((itemNum, i) => {
            // const secondId = `${id}-${i}-${itemNum}`;
            return (
              <motion.div
                layoutId={`${total - i}`}
                key={itemNum}
                className='flex h-[32px] w-[32px] items-center justify-center rounded bg-indigo-400 font-semibold text-lg text-white'
              >
                <FaCat title={`${total - i}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
