export default function Todo({ text, completed, handleOnTodoClick, handleOnDeleteTodoClick }) {
  return (
    <div className={`${completed ? 'border-gray-300 bg-gray-50' : 'hover:bg-gray-50'} pr-4 h-14 flex items-center rounded-md border cursor-pointer`}>
      <div onClick={handleOnTodoClick} className="flex-1 px-4 h-full flex items-center">
        <input readOnly checked={completed} className="form-checkbox w-5 h-5 rounded-full text-green-400 focus:ring-1 focus:ring-gray-400 focus:checked:ring-green-300 focus:ring-offset-2 focus:ring-offset-white cursor-pointer" type="checkbox" />
        <h3 className={`${completed && 'line-through'} mx-4 flex-1 text-sm sm:text-base`}>
          {text}
        </h3>
      </div>
      <button onClick={handleOnDeleteTodoClick} className="-mr-1 p-px rounded-full text-gray-500 border border-transparent focus:border-gray-300 focus:outline-none">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
    </div>
  )
}