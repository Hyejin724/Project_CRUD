import React from 'react'

export default function Form() {
  return (
    <>
    <div className="flex justify-stretch gap-10">
    <div className="지출항목">
        <div className="text-green-500 font-semibold ">지출항목</div>
        <input type="text" name="item" placeholder="예) 렌트비"
        className="border-0 border-b-2 border-solid border-green-100"/>
    </div>
    <div className="비용">
    <div className="text-green-500 font-semibold">비용</div>
    <input type="text" name="price" placeholder="0"
    className="border-0 border-b-2 border-solid border-green-100"/>
    </div>
    </div>
    <button className="p-2 mt-2 bg-green-500 flex text-white font-semibold gap-5">제출 <img className="w-5"src="https://www.svgrepo.com/show/201996/paper-plane.svg"/></button>
    </>
  )
}
