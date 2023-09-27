import Input from '@/components/Input';
import Image from 'next/image';

export default function Auth () {
  return (
    <main className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center">
      <section className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image 
            src="/images/logo.png"
            alt='logo'
            width={50}
            height={50}
          />
        </nav>

        <article className='flex justify-center'>
          <aside className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className='text-white text-4xl mb-8 font-semibold'>Sign In</h2>
            <div className="flex flex-col gap-4">
              <Input />
            </div>
          </aside>
        </article>
        
      </section>
    </main>
  )
}