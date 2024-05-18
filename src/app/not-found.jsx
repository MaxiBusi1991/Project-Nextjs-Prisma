import Link from 'next/link'

function notFound() {
  return (
    <section className='flex h-[calc(100vh-7rem)] justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mt-5'>
          Not Found            
        </h1>
        <div className='mt-4'>
          <Link
              className='text-slate-400 text-2xl hover:text-slate-100' 
              href="/">Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  )
}

export default notFound