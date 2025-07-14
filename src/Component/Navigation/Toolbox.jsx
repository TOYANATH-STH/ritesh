import { Link } from "react-router-dom"
import { CiMenuBurger } from "react-icons/ci";

function Toolbox() {
  const nav_item = [
    { title: "Home", path: '/' },
    { title: "About", path: '/about' },
    { title: "Contact", path: '##' },
    { title: "blog", path: '##' },
    { title: "Event", path: '##' },
  ]
  return (

    <div className='flex justify-between px-10 fixed top-10 left-0 right-0 mx-auto w-11/12 py-4 shadow-2x1 bg-blue-500'>
      <div className='font-bold text-x1 text-white'>Traning</div>

      {
        nav_item.map((val, i) => {
          return (
            <div>
              <Link to={val.path} key={i} className={`capitalize ${location.pathname == val.path ? "text-red-600" : "text-white"}`}>
                {val.title}
              </Link>
              <div className={`h-1 bg-white ${location.pathname == val.path ? "w-full" : "w-0"}transition-all duration-700 delay-75 ease-in-out`}></div>
            </div>

          )
        })
      }
      <CiMenuBurger className="font-black text-4xl"/>
    </div>
    




  )
}

export default Toolbox
