import React from 'react'
import HeadSubhead from './head-subhead'

const Faq = () => {
  return (
    <div>
        <HeadSubhead name={'FAQ'} subname={'Frequently asked question'} />
        <div className="w-full max-w-7xl mx-auto p-4">

  <div className="space-y-4">
    <div className="bg-[#3D3D3D] p-6 px-8 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Video Background</h3>
        -
      </div>
      <p className="mt-2 text-[#858587]">
        Fermentum et sollicitudin ac orci phasellus egestas tellus. Magna
        fermentum iaculis eu non diam phasellus vestibulum lorem sed. Nascetur
        ridiculus mus mauris vitae ultricies leo. At volutpat diam ut venenatis
        tellus in metus. Nibh nisl condimentum id venenatis. Sagittis purus sit
        amet volutpat consequat.
      </p>
    </div>
    <div className="bg-[#3D3D3D] p-6 px-8 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Multiple Flexible</h3>
        +
      </div>
    </div>
    <div className="bg-[#3D3D3D] p-6 px-8 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Upload Different</h3>
        +
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Faq