import React from 'react'

const FeaturedCard = ({ icon: Icon, title, description, color, iconColor }) => {
  return (
    <>
      <div className="rounded-xl flex justify-center  gap-8 items-center bg-white/5 p-6  backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10 hover:border-sky-400/30">
        <div className={`mb-3  rounded-lg ${color} p-2.5 ${iconColor}`}>
          <Icon size={22} />
        </div>
        <div className="desc ">
          <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>



    </>
  )
}

export default FeaturedCard