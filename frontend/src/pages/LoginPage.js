import FloatingShape from "../components/FloatingShape"
export default function LoginPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br 
     from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'
    >
      <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' deply={0} />
      <FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' deply={5} />
      <FloatingShape color='bg-line-500' size='w-32 h-32' top='40' left='-10%' deply={2} />
    </div>
  )
};