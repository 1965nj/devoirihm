import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex space-y-10 '>
      <section className='w-60'>
        <div >
          <h1 className='text-3xl text-green-600'>Tons of <br /> supportive<br />
            community you<br />can discover </h1>
        </div>
        <div>
          <h1 className='text-white'>
            Search any tpe and field of community you want, by searching<br />
            on the search page you can discover tons of supportive<br />
            community that will held you with your work.
          </h1>
        </div>
        <div>
          <button className='h-8 text-white border border-gray-300 rounded-full w-52'>Explore the communities</button>
        </div>
      </section>
      <section className='space-y-4'>
        <div className='space-y-6 text-center bg-gray-900 border border-none rounded-xl h-60 w-60'>
          <img></img>
          <p className='text-2xl text-white'>Study With Me! </p>
          <p className='text-gray-600'>Study stream  via live-time with<br />people around world.</p>
          <button className='w-40 h-8 bg-green-400 border border-gray-900 rounded-full'>Join now</button>
        </div>
        <div className='h-40 space-y-6 text-center bg-gray-900 border border-none rounded-xl w-80'>
          <p>Discover the community you want</p>
          <p>From design, programming,to study stream</p>
          <input type='search' placeholder='Discover communities' className='h-8 bg-gray-600 rounded '/>
        </div>
        <div className='h-8 bg-gray-900 border-gray-900 rounded'>
          Framer community
        </div>
        <div className='h-8 bg-gray-900 border-gray-900 rounded'>
          Behance community
        </div>
      </section>
    </main>
  )
}
