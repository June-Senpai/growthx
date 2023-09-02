import React from "react"
import "./Navbar.css"
import Button from "./Button"

const Navbar = () => {
  return (
    <div className="flex items-center mt-5 justify-center gap-56 ">
      <img
        src="https://uploads-ssl.webflow.com/63a49822ee2304acc9455a42/63a60a29efca119ed5ea3cd4_Logo.svg"
        alt=""
        className=""
      />
      <div className="flex gap-8 items-center justify-center font-sans cursor-pointer nav-items ">
        <h3 className="flex items-center navbar-item gap-1 pb-4 ">
          Outcome
          <div className="drop-down border-2 border-white rounded-lg flex flex-col p-6 pr-24 gap-6">
            <span>Operators</span>
            <span>Founders</span>
          </div>
          <div className="rotate-90 icon flex">
            <svg
              class="bi bi-caret-right"
              fill="currentColor"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </div>
        </h3>
        <h3 className="pb-4">Community</h3>
        <h3 className="flex items-center navbar-item gap-1 pb-4">
          Resources
          <div className="drop-down border-2 border-white rounded-lg flex flex-col p-6 pr-24 gap-6">
            <span>Framework</span>
            <span>Blog</span>
            <span>Template</span>
          </div>
          <div className="rotate-90 icon flex">
            <svg
              class="bi bi-caret-right"
              fill="currentColor"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </div>
        </h3>
        <h3 className="pb-4">Membership Guide</h3>
        <h3 className="pb-4">Login</h3>
      </div>
      <Button />
    </div>
  )
}

export default Navbar
