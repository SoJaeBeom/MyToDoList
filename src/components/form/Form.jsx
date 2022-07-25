import './style.css'

export default function Form() {
  return (
    <>
      <div className="form">
        <label>제목</label>
        <input type="text" />
        <label>내용</label>
        <input type="text" />
        <button>추가하기</button>
      </div>
    </>
  )
}
