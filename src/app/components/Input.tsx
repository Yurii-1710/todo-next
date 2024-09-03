import { inputProps } from "../types"

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="block w-full p-4 border rounded-lg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
      />
    </div>
  )
}

export default Input
