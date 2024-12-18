import React from 'react'

const about = () => {
  return (
    <>
      <div className='main flex flex-col gap-10 container m-auto h-full max-w-[75%] my-10'>

        <div className="header flex flex-col gap-4">

          <h1 className='text-2xl font-bold'> About Get Me a Chai</h1>
          <p>
            Get me a chai is a crowdfunding platform designed for creators to fund their projects
            with support of their fans. A platform where your fans can directly contribute to your creative endavors
            by buying you a chai. Unlock the potential of your fanbase and bring your projects to life.
          </p>

        </div>

        <div className="mid-sec flex flex-col gap-4">

          <h2 className='text-xl font-bold'>How It Works</h2>

          <div className="row flex gap-10">
            <div className="left flex justify-center items-center gap-3 max-w-[50%]">
              <div className="Left-icon"><img className='h-14' src="user.svg" alt="" /></div>
              <div className="Left-content">
                <h3 className='text-xs font-bold'>Fans Want to Collobarate</h3>
                <p className='text-sm text-gray-300'>Your fans are enthausiastic about collaborating with you on your projects</p>
              </div>
            </div>

            <div className="right flex justify-center items-center gap-3 max-w-[50%]">
              <div className="right-icon"><img className='h-14 w-20' src="coin.gif" alt="" /></div>
              <div className="right-content">
                <h3 className='text-xs font-bold'>Support Through Chai</h3>
                <p className='text-sm text-gray-300'>Recieve support from your fans in the form of chai purchases, directly contributing to your project funding.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="final-sec flex flex-col gap-5">
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold'>Benifits for Creators</h2>
            <div className="specs flex flex-col gap-2 text-gray-300">
              <p> - Direct financial support from your fanbase</p>
              <p> - Engage with your fans on a more personal level</p>
              <p> - Access to a platform tailored for creative projects</p>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold'>Benifits for Fans</h2>
            <div className="specs flex flex-col gap-2 text-gray-300">
              <p>- Directly contribute to the success of your favorite creators</p>
              <p>- Exclusive rewards and perks for supporting creators</p>
              <p>- Be part of the creative process and connect wiith creators</p>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold'>Benifits of Colloboration</h2>
            <div className="specs flex flex-col gap-2 text-gray-300">
              <p>- Unlock new opportunities through collaboration with fellow creatos</p>
              <p>- Expand your network and reach a wider audience</p>
              <p>- Combine skills and resources to create innovative projects</p>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold'>Community Engagement</h2>
            <div className="specs flex flex-col gap-2 text-gray-300">
              <p>- Contact with a supportive community of like-minded individuals</p>
              <p>- Recieve valuable feedback and encouragement from peers</p>
              <p>- Participate in discussions and events centerd around your intrests</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default about
