import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <div className="border-t border-gray-300">
      <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-white border-t border-gray-300 p-2 z-50">
        <Link
          href="/posts"
          className="mt-1 ml-2 pt-2 pb-2 pl-4 pr-4 bg-gray-100 items-center rounded-lg"
        >
          <div className="text-center">
            <Image
              src="/posts_icon.png"
              alt="Icon"
              width={40}
              height={40}
            />
            Posts
          </div>
        </Link>
        <Link
          href="/direct-message"
          className="mt-1 ml-2 pt-2 pb-2 pl-4 pr-4 bg-gray-100 items-center rounded-lg"
        >
          <div className="text-center">
            <Image
              src="/dm_icon.png"
              alt="Icon"
              width={40}
              height={40}
            />
            DM
          </div>
        </Link>
        <Link
          href="/complain"
          className="mt-1 ml-2 pt-2 pb-2 pl-4 pr-4 bg-gray-100 items-center rounded-lg"
        >
          <div className="text-center">
            <Image
              src="/galaxy_icon.png"
              alt="Icon"
              width={40}
              height={40}
            />
            Guchi
          </div>
        </Link>
      </div>
      <div>
        &copy; 2025 Shunsuke HIRATA
      </div>
    </div>
  )
}

export default Footer