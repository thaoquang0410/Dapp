import React, { useEffect, useState } from "react";
import {BiTransfer} from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import { truncate, useGlobalState } from "../store";

const Transactions = () => {
  const [transactions] = useGlobalState('transactions')
  const [end, setEnd] = useState(1)
  const [count] = useState(1)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return transactions.splice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [])

  return (
    <div className="bg-[#151c25]">
      <div className="w-4/5 py-10 mx-auto">
        <h4
          className="text-white text-3xl font-bold
            uppercase text-gradient"
        >
          {collection.length > 0 ? 'Latest Transactions' : 'No Transaction yet.'}
        </h4>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-6 md:gaps-4 lg:gaps-2 py-2.5"
        >
          {collection.map((nft, i) => (
              <Transaction key={i} tx={nft} />
            ))}
        </div>

        {collection.length > 0 && nfts.length > collection.length ? (
          <button
            className="shadow-lg shadow-black text-sm
          bg-[#e32970] hover:bg-[#bd255f] rounded-full px-1.5 py-1"
            onClick={() => setGlobalState("showModal", "scale-100")}
          >
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
};

const Transaction = ({ tx }) => (
    <div className='flex justify-between items-center border border-pink-500
    text-gray-400 w-full shadow-xl shadow-black rounded-md
    overflow-hidden bg-gray-800 my-2 p-3'>
        <div className="rounded-md shadow-sm shadow-pink-500 p-2">
            <BiTransfer />
        </div>

        <div>
            <h4 className='text-sm'>NFT Transfered</h4>
            <small className='flex justify-start items-center'>
                <span className='mr-1'>Received by</span>
                <a className='text-pink-500 mr-2' href="#" target="_blank">{truncate(tx.owner, 4,4,11)}</a>
                  <MdOpenInNew />
            </small>
        </div>

        <p className='text-sm font-medium'>{tx.cost}</p>
    </div>
)
export default Transactions;
