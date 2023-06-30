import Link from 'next/link'

const Contact = () => {
  return (
    <div className='lessSmall:text-lg flex flex-col lg:items-start lg:font-semibold flex-wrap gap-1 lg:gap-2 items-start justify-center w-full lg:text-xl'>
      <Link
        href="mailto:joonatan.karhu@outlook.com"
        className="hover:underline hover:text-black font-semibold"
      >
        <p>joonatan.karhu@outlook.com</p>
      </Link>
      <Link
        href="https://github.com/joonatankarhu"
        target="_blank"
        className="hover:underline hover:text-black font-semibold"
      >
        <h5>GitHub</h5>
      </Link>
      <Link
        href="https://github.com/joonatankarhu"
        target="_blank"
        className="hover:underline hover:text-black font-semibold"
      >
        <h5>LinkedIn</h5>
      </Link>
    </div>
  )
}

export default Contact
