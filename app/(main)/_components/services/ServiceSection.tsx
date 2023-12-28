
import ServicesTitle from './ServicesTitle'
import ServicesContent from './ServicesContent'

function ServiceSection() {
  return (
    <div className='flex flex-col justify-center items-center mx-auto max-w-7xl w-full h-auto mt-8'>
      <div className='flex justify-center items-center'>
         <ServicesTitle />
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-center p-[70px] mt-[-50px] mx-8'>
<ServicesContent />
      </div>
    </div>
  )
}

export default ServiceSection