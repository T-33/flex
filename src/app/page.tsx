import Image from 'next/image'

export default function Home() {
  return (
    <main className='m-0 font-sans bg-white'>
      <header className='text-center uppercase p-[32px] bg-[#0a0a23] text-white border-b-4 border-[#fdb347]  border-solid font-bold'>
        <h1>css flexbox photo gallery</h1> 
      </header>
      <div className='flex flex-row align-center flex-wrap justify-center gap-[16px] max-w-[1400px] my-0 mx-auto py-[20px] px-[10px] after:w-[350px]'>
        <Image className="w-[100%] max-w-[350px] h-[300px] object-cover rounded-[10px]" src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg" width={350} height={300} alt="cuteCat"/>
        <Image className="w-[100%] max-w-[350px] h-[300px] object-cover rounded-[10px]" src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg" width={350} height={300} alt="cuteCat"/>
        <Image className="w-[100%] max-w-[350px] h-[300px] object-cover rounded-[10px]" src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg" width={350} height={300} alt="cuteCat"/>
        <Image className="w-[100%] max-w-[350px] h-[300px] object-cover rounded-[10px]" src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg" width={350} height={300} alt="cuteCat"/>
        <Image className="w-[100%] max-w-[350px] h-[300px] object-cover rounded-[10px]" src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg" width={350} height={300} alt="cuteCat"/>
        <Image className="w-[100%] max-w-[350px] h-[300px] object-cover rounded-[10px]" src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg" width={350} height={300} alt="cuteCat"/>
        <Image className="w-[100%] max-w-[350px] h-[300px] object-cover rounded-[10px]" src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg" width={350} height={300} alt="cuteCat"/>
        <Image className="w-[100%] max-w-[350px] h-[300px] object-cover rounded-[10px]" src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg" width={350} height={300} alt="cuteCat"/>
        <Image className="w-[100%] max-w-[350px] h-[300px] object-cover rounded-[10px]" src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg" width={350} height={300} alt="cuteCat"/>
      </div>
    </main>
  )
}
