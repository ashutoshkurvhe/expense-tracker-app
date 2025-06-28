import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
  return (
      <div>
          <label className="text-[13px] text-slate-800">{label}</label>

          <div className="input-box relative">
              <input type={type == 'password' ? showPassword ? 'text' : 'password' : type} placeholder={placeholder} className="w-full bg-transparent outline-none" value={value} onChange={(e)=> onChange(e)}/>

          {type === 'password' && (
              <>
                  {showPassword ? (
                      <FaRegEye size={22} className="text-gray-600 cursor-pointer absolute right-5" onClick={()=>toggleShowPassword()}/>
                    ) : (<FaRegEyeSlash size={22} className="text-gray-500 crursor-pointer absolute right-5" onClick={()=> toggleShowPassword()} />)}
              </>
          )}
          </div>
    </div>
  )
}

export default Input
