import {motion} from "framer-motion";
import Input from "../components/Input";
import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {

  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
  }
  return (
    <motion.div
      initial={{ opacity: 0, y:20 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
    >
      <div className='p-8'>
        <h2
          className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'
        >
          Create Account
        </h2>
        <form onSubmit={handleSignup}>
          <Input
            icon={User}
            type='text'
            placeholder='Full name'
            value={name}
            onChange={(e) => setName(e.traget.value)}
          />
          <Input
            icon={Mail}
            type='text'
            placeholder='Email Address '
            value={email}
            onChange={(e) => setEmail(e.traget.value)}
          />
          <Input
            icon={Lock}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.traget.value)}
          />
          {/* Password strenth meter  */}

          <motion.button
            className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white front-bold round-lg shadow-lg hover:from-green-600
            font-bold rounded-lg shadow-lg hover:from-green-600
            hover:to-emerald-700 focus:outline-none focus:ring2 focus:ring-greem-500 focus:ring-offset-2
            focus:ring-offset-gray-900 transition duration-200'
            whileHover={{ scale: 1.03 }}
            whileTrap={{scale: 0.98}}
            type='submit'
          >
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}
